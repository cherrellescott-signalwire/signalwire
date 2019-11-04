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

// these are used in the callbacks section and are define there
var la;
var cb;

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

}


////////////////////////////////////////////////
// START MINIMUM SERVER FOR OUTGOING MESSAGE
////////////////////////////////////////////////
// THIS WILL CHARGE ACCOUNT FOR ONE OUTBOUND SMS
////////////////////////////////////////////////

// function call to get personal vars.
if (typeof get_vars === "function") {
    get_vars()
}

const { RestClient } = require('@signalwire/node');
const signalwire = new RestClient( pk, at, { signalwireSpaceUrl: su });

signalwire.messages
.create({ from: pn, to: cn, body: sms })
.then( sw_json_response => {
  console.log(sw_json_response);
  console.log("Your Message Sid: " + sw_json_response.sid)})
.catch( error => { console.log(error) })
.done(console.log("sending message, awaiting JSON response from SignalWire..."));
//////////////////////////////////////////
// END MINIMUM SERVER FOR OUTGOING MESSAGE
//////////////////////////////////////////
