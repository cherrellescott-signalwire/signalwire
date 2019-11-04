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

//////////////////////////////////////////////////////////////////////
// START MINIMUM SERVER FOR INCOMING MESSAGE AUTO REPLY - GET REQUEST
//////////////////////////////////////////////////////////////////////
// THIS WILL CHARGE FOR TWO SMS, ONE INBOUND SMS, AND ONE OUTBOUND SMS
//////////////////////////////////////////////////////////////////////

// function call to get personal vars.
if (typeof get_vars === "function") {
    get_vars()
}

const express = require('express');
const server = express();
const { RestClient } = require('@signalwire/node');
const signalwire = new RestClient( pk, at, { signalwireSpaceUrl: su });

server.get("/sendSMS", function (req,res) {
    console.log("GET Request from SignalWire to nodejs:\n" + JSON.stringify(req.query));
    res.set('Content-Type', 'text/xml');
    res.send('<Response><Message>Its working. This is a GET Response from nodejs to generate LaML for SignalWire to process.\nMessageSid: ' + req.query.MessageSid + '</Message></Response>');
});


// puts the server into operation
if ((ip !== "SERVER_IP_HERE" ) && ( port !== '' )) {
    server.listen(port, ip);
    console.log('now listening on port ' + port + ' at ip ' + ip);
    console.log("\nGo to this url in browser and see LaML generation and make sure it's working:\n  \x1b[33m%s\x1b[0m",  "http://" + ip + ":" + port + "/sendSMS");
    console.log("  \x1b[33m%s\x1b[0m",  "http://" + eip + ":" + port + "/sendSMS");
    console.log("\nOr issue this curl command in another terminal to see LaML generation is working:\n  \x1b[33mcurl -X GET %s\x1b[0m",  "http://" + ip + ":" + port + "/sendSMS");
    console.log("  \x1b[33mcurl -X GET %s\x1b[0m",  "http://" + eip + ":" + port + "/sendSMS");
    console.log('\nGo to SignalWire dashboard \x1b[33mPhone Number > Edit Settings > WHEN A MESSAGE COMES IN:\x1b[0m and set url to:');
    console.log('    \x1b[33mhttp://' + eip + ':' + port + '/sendSMS\x1b[0m');
    console.log('\nNow send an sms to \x1b[33m%s\x1b[0m and await the auto-reply\n', pn)} else {
    console.log("ERROR: Please give variables \"ip=" + ip + "\" and \"port=" + port + "\" proper values");
}
///////////////////////////////////////////////////////////////////
// END MINIMUM SERVER FOR INCOMING MESSAGE AUTO REPLY - GET REQUEST
///////////////////////////////////////////////////////////////////
