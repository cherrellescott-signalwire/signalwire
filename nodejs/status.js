// https://pastebin.freeswitch.org/view/044e0b96

/*
//    Do some installation prequisite commands on your server project directory
//
    npm install express --save
    npm install @signalwire/node --save
    npm install body-parser --save
    npm install ws --save
    npm install fs --save
    npm install http --save
    npm install https --save
    npm install util --save
    npm install process --save
    npm install child_process --save
    npm install os --save
    npm install -g browserify --save
*/

// use strict syntax checking to help find common errors
'use strict';

// utilize and processing tools for debugging objects
const util = require('util');
const process = require('process');

// initiallize some empty global variables to prevent if clause choking
var port;
var sport;
var ip;
var pk;
var at;
var su;
var pn;
var cn;
var sms;

// init relay vars
var port2;
var sport2;

// these are used in the callbacks section and are define there
var la;
var cb;

// declared for security certs
var privkey;
var cert;
var fullchain;

// for getting local ip
const os = require('os');
const lip = os.networkInterfaces();

// for getting external ip
const { execSync } = require('child_process');
const eip = execSync('curl --silent ifconfig.me')

// for reading variables from .env file
const dotenv = require('dotenv');
dotenv.config();

/******************************
 setup your personal variables
******************************/
function get_vars() {
    // your local port
    port = process.env.PORT

    // local https port
    sport = process.env.SECURE_PORT

    // your local ip address of your server
    //ip=lip.ens18[0].address; // for numbers proxmox
    //ip=lip.enp4s0[0].address; // for ezra baremetal
    ip = process.env.IP

    // your space name url
    su = process.env.SPACE_URL

    // your project key
    pk = process.env.PROJECT_KEY

    // your api token
    at = process.env.API_TOKEN

    // your signalwire phone number
    pn = process.env.PHONE_NUMBER

    // your cellphone number
    cn = process.env.CELL_NUMBER

    // body of sms message
    sms = process.env.SMS_BODY

    // specify paths to your certs
    privkey = process.env.PRIVKEY
    cert = process.env.CERT
    fullchain = process.env.FULLCHAIN


    // then the Relay vars
    port2 = process.env.RELAY_PORT
    sport2 = process.env.RELAY_SECURE_SPORT

}

///////////////////////////////////////////////////////////
// START MINIMUM SERVER FOR STATUS CALLBACKS - GET AND POST
///////////////////////////////////////////////////////////

// function call to get personal vars.
if (typeof get_vars === "function") {
    get_vars()
}


//
// setup some constant server needs
//
const express = require('express');
const server = express();
const { RestClient } = require('@signalwire/node');
const signalwire = new RestClient(pk, at, { signalwireSpaceUrl: su })

//
// setup needed for parsing the body of POST statusCallbacks, GET alone does not require this
//
var bp = require('body-parser');
server.use(bp.urlencoded({ extended: true }));


//
// If using "applicationSid", set dashboard Laml App to use GET to hit this route and show the StatusCallback is working for message status updates
// Must setup the "WHEN THE MESSAGE IS DELIVERED:" url (i.e. "http://<IP_OR_DOMAIN>:3000/status") in your LaML Apps dashboard")
//
// If using "statusCallback", ensure the port is forwarded from router to nodejs server
//
server.get("/status", function (req,res) {
  console.log("\nMessage Status GET: %s\n", JSON.stringify(req.query));
  // sending an empty LaML response from our server back to SignalWire's message StatusCallback request
  // will the 2-way communication dialog and provide for proper a 200OK in dashboard message log.
  // see more notes in 'server.post' below.
    res.set('Content-Type', 'text/xml');
    res.send('<Response></Response>');
});


//
// If using "appplicationSid", set dashboard Laml App to use POST to hit this route and show the StatusCallback is working for message status updates
// Must setup the "WHEN THE MESSAGE IS DELIVERED:" url (i.e. "http://<IP_OR_DOMAIN>:3000/status") in your LaML Apps dashboard")
//
// If using "statusCallback", ensure the port is forwarded from router to nodejs server
//
server.post("/status", function (req,res) {
    console.log("\nMessage Status POST: %s\n", JSON.stringify(req.body));
    // Without this empty response, even though your server will still receive the message status updates from SW, your SW dashboard message
    // log will show failed, as SW is waiting for some type of acknowledgement from our server, and times out pending this response..
    // see more notes in 'server.get' above.
    res.set('Content-Type', 'text/xml');
    res.send('<Response></Response>');
    //res.send('<Response><Say>testing things here</Say></Response>');
});

// puts the server into operation
if ((ip !== "SERVER_IP_HERE" ) && ( port !== '' )) {
    server.listen(port, ip);
    console.log('NodeJs is listening on port \x1b[33m' + port + '\x1b[0m with local ip \x1b[33m' + ip + '\x1b[0m, and your external ip is \x1b[33m' + eip +'\x1b[0m\n');
}
