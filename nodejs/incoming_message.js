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

}

//////////////////////////////////////////////////////////
// START MINIMUM SERVER FOR GET REQUEST - INCOMING MESSAGE
//////////////////////////////////////////////////////////
// SENDING MESSAGE TO THIS WILL CHARGE ACCOUNT FOR ONE INBOUND SMS
//////////////////////////////////////////////////////////////////

// function call to get personal vars.
if (typeof get_vars === "function") {
  get_vars()
}

const express = require('express');
const server = express();
const { RestClient } = require('@signalwire/node');
const signalwire = new RestClient( pk, at, { signalwireSpaceUrl: su });

server.get("/sendSMS", function (req,res) {
    //console.log(req)  // verbose request info
    console.log('Incoming GET:');
    console.log(req.query);

    // notice in dashboard LaML Messaging Logs, it show failed, even though the message indeed reached our server
    res.set('Content-Type', 'text/xml');
    res.send("GET Request is working. Ready for inbound SMS.")
});

server.post("/sendSMS", function (req,res) {
    //console.log(req)  // verbose request info
    console.log('Incoming POST:');
    console.log(req.body)

    // notice in dashboard LaML Messaging Logs, it show failed, even though the message indeed reached our server
    res.set('Content-Type', 'text/xml');
    res.send("<Response>POST Request is working. Ready for inbound SMS.</Response>")
});

server.listen(port, ip);
console.log('now listening on port \x1b[33m' + port + '\x1b[0m at ip \x1b[33m' + ip + '\x1b[0m and external ip \x1b[33m' + eip + '\x1b[0m');
console.log('\nGo to this url in browser to test the server is working:\n  \x1b[33m%s\x1b[0m',  'http://' + ip + ':' + port + '/sendSMS?testing=cool%20it%20works');
console.log('  \x1b[33m%s\x1b[0m',  'http://' + eip + ':' + port + '/sendSMS?testing=cool%20it%20works')
console.log("\nor issue this curl command in another terminal to view the same:\n  \x1b[33mcurl -X GET %s\x1b[0m",  "http://" + ip + ":" + port + "/sendSMS?testing=cool%20it%20works");
console.log("  \x1b[33mcurl -X GET %s\x1b[0m",  "http://" + eip + ":" + port + "/sendSMS?testing=cool%20it%20works");
console.log('\nsend an sms to \x1b[33m%s\x1b[0m and view node console log', pn);
////////////////////////////////////////////////////////
// END MINIMUM SERVER FOR GET REQUESTS - INCOMING MESSAGE
////////////////////////////////////////////////////////
