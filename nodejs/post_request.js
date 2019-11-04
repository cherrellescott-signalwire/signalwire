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

////////////////////////////////////////////////////////////////////////
// START MINIMUM SERVER FOR MESSAGE RELAY - LaML REDIRECT - POST REQUEST
/////////////////////////////////////////////////////////////////
// EDIT PHONE SETTINGS IN SIGNALWIRE DASHBOARD TO "POST"
// YOU WILL BE CHARGED FOR 4 SMS prices using this.
//   1. Inbound from somebody to server.
//   2. Outbound from server to you.
//   3. Inbound from you to server.
//   4. Outbound from server to somebody.
////////////////////////////////////////////////////////

// function call to get personal vars.
if (typeof get_vars === "function") {
  get_vars()
}

const express = require('express');
const server = express();
const { RestClient } = require('@signalwire/node');
const signalwire = new RestClient( pk, at, { signalwireSpaceUrl: su });

// needed for POST requests
const bp = require('body-parser');
server.use(bp.urlencoded({ extended: true }));

// declare a var to keep track of somebody's number who is intiating an sms to me.
// In real world, this might be a database call. But a global var for training will do
var initiator = 'none'

server.post("/sendSMS", function (req,res) {
    console.log('entering POST request')
    console.log(req.body)

    // first we check if initiator isnt me, then just forward message to my cell.
    if ( req.body.From !== cn ) {
	console.log("\nsomebody initiated an sms to you\n")

	// remember who sent you the sms
	initiator = req.body.From
	// clear the remberance after 5 minutes, is case you forget to "RESET" manually (see below)
	setTimeout(() => { initiator = 'none'; sendSMS(pn, cn, "iniiator cleared automatically by timeout."); }, 300000);
	try {
	    sendSMS(pn, cn, req.body.Body)
	    res.send('<Response>It Works</Response>')
	} catch(e) {
	    console.log("error: " + e)
	}

    // if I am the iniator, then do a smart parse of my special format, so sms will get send to my recipient
    // the special format is "+NUMBER@MESSAGE" i.e. "+18885551212@This is my body to send"
    } else if ((req.body.From === cn) && (initiator === 'none') ) {

	var init = req.body.Body
	var re = new RegExp("^(\\+[0-9]{11})@(.*)")
	if (re.test(init)) {

	    var match = re.exec(init)
	    var mTo = match[1]
	    var mBody = match[2]

	    console.log("\nRelay Number: " + mTo)
	    console.log("Relay Body: " + mBody + "\n")

	    try {
		sendSMS(pn, mTo, mBody)
		res.send('<Response></Response>')
	    } catch(e) {
		console.log("error: " + e)
	    }

        // If i'm the initiator, and my special format isnt found in body, send me back a reminder of what that is
	} else {
	    console.log('\nyou are trying to initiate an sms to somebody, but did not use the special foramt "+NUMBER@MESSAGE\"\n')
	    res.send('<Response><Message>No initiator yet. To initatite message, use format without quotes:\n"+NUMBER@MESSAGE"</Message></Response>')
	    console.log("\nYou are iniating and sms to somebody\n")
	}

    // When somebody SMS me, and the 5 minute rememberance of their number begins, at any time I can send sms with all caps "RESET"
    //   to reset the initiator so I can send to a new recipient of my choosing without waiting.
    } else if ((req.body.From === cn) && (initiator) && (req.body.Body === "RESET")) {
	initiator = 'none'
	console.log("You have cleared initiator, ready for new recipient")
	res.send('<Response><Message>Initiator cleared. Ready for new recipient</Message></Response>')

    // and final condition is to simply to forward my reply to whomever initiated an sms.
    } else {
	console.log("\nYou are replying to an sms that sombody else initiated to you\n")
	try {
	    sendSMS(pn, initiator, req.body.Body)
	    res.send('<Response></Response>')
	} catch(e) {
	    console.log("error: " + e)
	}
    }
});

// this is the function that actually sends out the SMS requests to SignalWire
function sendSMS(init_from, init_to, init_body) {
    signalwire.messages.create({ from: init_from, to: init_to, body: init_body })
	.then(response => {
	    console.log(response);
	    console.log("sid: " + response.sid)
	})
	.catch(error => { console.log(error) })
	    .done(console.log("sending message, awaiting JSON response from SignalWire..."));
}

if ((ip !== "SERVER_IP_HERE" ) && ( port !== '' )) {
    // puts the server into operation
    server.listen(port, ip);

    // gives you alot of info when starting up
    console.log('NodeJs is listening on port \x1b[33m' + port + '\x1b[0m with local ip \x1b[33m' + ip + '\x1b[0m, and your external ip is \x1b[33m' + eip +'\x1b[0m\n');
    console.log('\nIn your Signalwire dashboard, you need to create a LaML Bin and put this LaML code in the bin.\nThis will only work if your port is forwarded from router to server.\n\n' +
                '\x1b[33m<Response>\n' +
                '  <Redirect method="POST">http://' + eip + ':' + port + '/sendSMS</Redirect>\n' +
                '</Response>\x1b[0m\n\n' +
                'Copy the bin link from the bins list page, go edit your Phone Number and paste in for \x1b[33mWHEN A MESSAGE COMES IN:\x1b[0m webhook\n' +
                'Choose the POST method dropdown. Now your SignalWire number will hit the LaML Bin first, and the bin will redirect message to your server.\n' +
                'This is needed for capturing \x1b[33mFrom\x1b[0m, \x1b[33mTo\x1b[0m, and \x1b[33mBody\x1b[0m values from other people initiating sms, and passing it on to you.');
    console.log('Also, We need to remember who they are in order to send sms back to them. That why "initiator=" variable exists.');
    console.log("\nFor POST request from browser address bar, paste this full string:");
    console.log("\x1b[33m%s\x1b[0m",  "  data:text/html,<body onload=\"document.body.firstChild.submit()\"><form method=\"post\" action=\"http://" + ip + ":" + port + "/sendSMS\"><input type=\"text\" name=\"Body\" value=\"testing\">");
    console.log("\x1b[33m%s\x1b[0m",  "  data:text/html,<body onload=\"document.body.firstChild.submit()\"><form method=\"post\" action=\"http://" + eip + ":" + port + "/sendSMS\"><input type=\"text\" name=\"Body\" value=\"testing\">");
    console.log('\nOr issue this curl command in another terminal:\n  \x1b[33mcurl -X POST -d "Body=Testing" %s\x1b[0m',  'http://' + ip + ':' + port + '/sendSMS');
    console.log('  \x1b[33mcurl -X POST -d "Body=Testing" %s\x1b[0m',  'http://' + eip + ':' + port + '/sendSMS');
    console.log('\nFor a full duplex (x4 SMS) test, have classmate send an sms to \x1b[33m%s\x1b[0m. And you reply. Both parties numbers should be masked by your SignalWire number.', pn);
    console.log('\nWhen someone sends SMS to your SW number, it forwards to your cell. You have 5 minutes to respond, or else the remembrance of initiators number will reset.');
    console.log('You can manually reset the rembrance before the 5 minutes lapses by sending all caps \x1b[33mRESET\x1b[0m to your SW number. Then you are free to iniate SMS to whomever else.');
    console.log('The format for iniating an SMS from your cell is \x1b[33m+NUMBER@MESSAGE\x1b[0m i.e. \x1b[33m+1888551212@This is my message\x1b[0m\n');
   } else {
    console.log("ERROR: Please give variables \"ip=" + ip + "\" and \"port=" + port + "\" proper values")
}
//////////////////////////////////////////////////////////////////////
// END MINIMUM SERVER FOR MESSAGE RELAY - LaML REDIRECT - POST REQUEST
//////////////////////////////////////////////////////////////////////
