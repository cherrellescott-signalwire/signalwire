//
// Do some installation prequisite commands on your server project directory
//
/*
    npm install express --save
    npm install @signalwire/node --save
    npm install body-parser --save
    npm install http --save
    npm install https --save
    npm install util --save
*/


//
// You should also create an ".env" file filled with your particulars
//
/*
PORT='3000'
SECURE_PORT='3001'
IP='192.168.150.7'
SPACE_URL='example.signalwire.com'
PROJECT_KEY='XXXX'
API_TOKEN='XXXX'
PHONE_NUMBER='+1334212XXXX'
CELL_NUMBER='+1931XXXXXXX'
SIP_DIAL='1XX@example-abcd1234'
SIP_FAILOVER='2XX@example-abcd1234'
NODE_URL='yourserver.com:3000'
*/




// use strict syntax checking to help find common errors
'use strict';

// utilize and processing tools for debugging objects
const util = require('util');


// initiallize some empty global variables to prevent if clause choking
var port;
var sport;
var ip;
var pk;
var at;
var su;
var sd;
var sf;
var nodeurl;
var sw_number_1;
var sw_number_2;
var sip_dialstring_1;
var sip_dialstring_2;

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
    ip = process.env.IP

    // your space name url
    su = process.env.SPACE_URL

    // your project key
    pk = process.env.PROJECT_KEY

    // your api token
    at = process.env.API_TOKEN

    // your sip dial string
    sd = process.env.SIP_DIAL

    // you sip failover string
    sf = process.env.SIP_FAILOVER

    // your node js base url and port
    nodeurl = process.env.NODE_URL

    // your SW trunk numbers which are forwarded to your nodejs server:port URL
    sw_number_1 = process.env.SW_NUMBER_1
    sw_number_2 = process.env.SW_NUMBER_2

    // your sip dialstrings
    sip_dialstring_1 = process.env.SIP_DIALSTRING_1
    sip_dialstring_2 = process.env.SIP_DIALSTRING_2
}


////////////////////////////////////////////////
// START MINIMUM SERVER FOR SIP FAILOVER
////////////////////////////////////////////////

// function call to get personal vars.
if (typeof get_vars === "function") {
    get_vars()
}

//
// Required for SignalWire
//
const { RestClient } = require('@signalwire/node');
const signalwire = new RestClient( pk, at, { signalwireSpaceUrl: su });

//
// setup nodejs express server apps
//
const express = require('express');
const server = express();

//
// Required for parsing POST body data
//
const bp = require('body-parser');
server.use(bp.urlencoded({ extended: true }));


//
// This is the "/siprouter" app I initially forword my SW number to
// under "WHEN A CALL COMES IN" setting for you signalwire phone
// I set mine to point to "http://XXXXXXX.com:3000/siprouter" URL
// Notice the "<Dial action=URL>" where i'm specifying to use "/sipfailover" url where the object "DialSipResponseCode" is parsed
server.post("/siprouter", (req,res) => {
    console.log("incoming call from " + req.body.From)
    res.set('Content-Type', 'text/xml');
    if (req.body.To == sw_number_1) {
	console.log("Dialed Number is:" + req.body.To)
	res.send('<Response><Dial action="http://' + nodeurl + '/sipfailover"><Sip>' + sip_dialstring_1 + '?trunk=' + req.body.To + '</Sip></Dial></Response>')
    } else if (req.body.To == sw_number_2) {
	res.send('<Response><Dial action="http://' + nodeurl + '/sipfailover"><Sip>' + sip_dialstring_2 + '?trunk=' + req.body.To + '</Sip></Dial></Response>')
    } else {
	res.send('<Response><Say>Your failover request failed. Please try again</Say></Response>')
    }
});


//
// if the dialstring "sip_dialstring_1" at  fails, the call will go here next for failover SIP dialstring
//
server.post("/sipfailover", function (req,res) {
    //console.log(req)  // verbose request info
    //console.log(req.body)

    if ((req.body.DialSipResponseCode > 299) || (req.body.DialCallStatus === 'failed')) {
	if (req.body.To == sw_number_1) {
	    console.log('failing over to: '+ sip_dialstring_2);
	    res.set('Content-Type', 'text/xml');
	    res.send('<Response><Dial><Sip action="http://' + nodeurl + '/sipfailover">' + sip_dialstring_2 + '?trunk=' + sw_number_1 + '</Sip></Dial></Response>')
	} else if (req.body.To == sw_number_2) {
	    console.log('failing over to: '+ sip_dialstring_1);
	    res.set('Content-Type', 'text/xml');
	    res.send('<Response><Dial><Sip action="http://' + nodeurl + '/sipfailover">' + sip_dialstring_1 + '?trunk=' + sw_number_2 + '</Sip></Dial></Response>')
	}
    } else if (req.body.DialSipResponseCode >= 200 && req.body.DialSipResponseCode <= 299) {
	res.set('Content-Type', 'text/xml');
	res.send('<Response><Say>Your sip failover scenario has Suceeded. Goodbye</Say></Response>')
        console.log("failover attempt suceeded.")
    } else {
	res.set('Content-Type', 'text/xml');
	res.send('<Response><Say>Your sip failover scenario has failed. Please try again</Say></Response>')
        console.log("failover attempt failed.")
    }

});

//
// setup http non-secure server in way that uses express "server" apps
//
const http = require('http');
const options = {
    host: ip,
    port: port
}
var httpServer = http.createServer(options, server)
httpServer.listen(port);
console.log("server listening on port " + port)
