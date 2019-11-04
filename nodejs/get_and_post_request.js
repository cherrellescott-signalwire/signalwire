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
// Handling SMS GET Requests
//
server.get("/laml", (req, res) => {
    console.log("\nProcessing client GET request on NodeJS")
    console.log("Request:\n" + util.inspect(req.query))

    // pass the GET request to our sendSMS() function for decisions
    sendSMS(req.query,res)  // notice for GET we're passing req.query
    // we pass the "res" stuff too, so "res.send()" will work in sendSMS().
});


//
// Handling SMS POST Requests
//
server.post("/laml", (req, res) => {
    console.log("\nProcessing client POST request on NodeJS")
    console.log("Request:\n" + util.inspect(req.body))

    // pass the POST request to our sendSMS() function for decisions
    sendSMS(req.body, res)  // notice for POST we're passing req.body
    // we pass the "res" stuff too, so "res.send()" will work in sendSMS().
});

// When dealing with GET and POST, we want to pass along the Body of the message to sendSMS() function.
// When a GET hits express server.get(), the message body object is accessible by using "req.query.Body"
// When a POST hits express server.post(), the message body object is accessible by using "req.body.Body"
// Therefore, if we pass along either just "req.query" or just "req.body" as seen above,
//    we'll use "req.Body" as seen below to fulfill the REST API param for "body" like [[  .create(...  body: req.Body  ...)  ]]
// This way our sendSMS() function can operate with both GET and POST requests...

function sendSMS(req, res) {

    // to enable message status callbacks, fill in properly before
    // uncommenting one, or other, or both. See more info below regarding callbacks.
    // if both are uncommented, statusCallback will take priority

    // OPTIONAL: your LaML Application Sid, can be GET or POST in dashboard
    //la='<LAML_APP_SID>'

    // OPTIONAL: your own callback url, is POST only
    //cb='http://example.com:3000/status'

    // make decisions whether to use callbacks or not
    if (cb && la) {
	console.log("\nApplicationSid and StatusCallback parameters in use for status updates, but StatusCallback is taking precendence\n")

        signalwire.messages
            .create({from: pn, body: req.Body, to: cn, applicationSid: la, statusCallback: cb})
	    .then(message => { console.log("Message Sid: " + message.sid)
			       res.send("<Response></Response>"); })
	    .catch(error => {console.log("error: " + error); res.send(error)});
    } else if (cb) {
        console.log("\nstatusCallback parameter being used for status callback")
        signalwire.messages
            .create({from: pn, body: req.Body, to: cn, statusCallback: cb, statusCallbackMethod: 'GET'})
            .then(message => { console.log("Message Sid: " + message.sid)
			       res.send("<Response></Response>"); })
	    .catch(error => {console.log("error: " + error); res.send(error)});
    } else if (la) {
        console.log("\napplicationSid parameter being used for status callback")
        signalwire.messages
            .create({from: pn, body: req.Body, to: cn, applicationSid: la})
            .then(message => { console.log("Message Sid: " + message.sid)
			       res.send("<Response></Response>"); })
	    .catch(error => {console.log("error: " + error); res.send(error)});
    }  else {
        console.log("\nno sms callback parameters used")
	signalwire.messages
            .create({from: pn, body: req.Body, to: cn})
            .then(message => { console.log("Message Sid: " + message.sid)
			       res.send("<Response></Response>"); })
	    .catch(error => {console.log("error: " + error); res.send(error)});
    }
}


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
  res.set('Content-Type', 'text/xml');                                                                                                                            res.send('<Response>></Response>');
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
    res.send('<Response>></Response>');
});


//
// If your online dashboard is all prepped, port forwarded, and either "la" and/or "cb" uncommented, these status callback handlers above should just work.
// For an applicationSid, the callback can be a GET or POST depending what you set in the LaML App. Eitherway, this server is ready for both.
// For an statusCallback, it will always be a POST. If you need GET callbacks for your status, use applicationSid instead.
//


// puts the server into operation
if ((ip !== "SERVER_IP_HERE" ) && ( port !== '' )) {
    server.listen(port, ip);
    console.log('NodeJs is listening on port \x1b[33m' + port + '\x1b[0m with local ip \x1b[33m' + ip + '\x1b[0m, and your external ip is \x1b[33m' + eip +'\x1b[0m\n');

    console.log('For this callbacks section to work properly, you will need to setup up a LaML App in your dashboard.\n' +
                '    LaML > Apps > WHEN A MESSAGE COMES IN: \x1b[33mhttp://' + eip + ':' + port + '/laml\x1b[0m\n' +
                '    and           WHEN A MESSAGE IS DELIVERED: \x1b[33mhttp://' + eip + ':' + port + '/status\x1b[0m\n' +
                'For the delivery METHOD, either GET or POST should work. Be sure to try them both.\n')
    console.log('You will need to find the LaML App Sid from the apps list page and fill in the \x1b[33mla = ?\x1b[0m nodejs variable so param \x1b[33mApplicationSid\x1b[0m will work.')
    console.log('And also be sure to fill in the \x1b[33mcb = ?\x1b[0m variable with \x1b[33mhttp://' + eip + ':' + port + '/status\x1b[0m so the \x1b[33mStatusCallback\x1b[0m param will work.')

    console.log('\nIf you send an sms to \x1b[33m%s\x1b[0m, you will get a carbon copy reply in your body, and you will be charged for (2) SMS. Thats (1) Inbound and (1) Outboud.', pn)

    console.log('This section can hanlde incoming messages, but is intended primarily for outbound messages from curl or browser bar to showcase status callbacks.')

    console.log("\nFor GET request from browser address bar, paste this full string:");
    console.log("  \x1b[33m%s\x1b[0m",  "http://" + ip + ":" + port + "/laml?Body=This%20is%20a%20browser%20GET%20test")
    console.log("  \x1b[33m%s\x1b[0m",  "http://" + eip + ":" + port + "/laml?Body=This%20is%20a%20browser%20GET%20test")

    console.log("\nFor POST request from browser address bar, paste this full string:");
    console.log("  \x1b[33m%s\x1b[0m",  "data:text/html,<body onload=\"document.body.firstChild.submit()\"><form method=\"post\" action=\"http://" + ip + ":" + port + "/laml\"><input type=\"text\" name=\"Body\" value=\"this is a browser POST test\">")
    console.log("  \x1b[33m%s\x1b[0m",  "data:text/html,<body onload=\"document.body.firstChild.submit()\"><form method=\"post\" action=\"http://" + eip + ":" + port + "/laml\"><input type=\"text\" name=\"Body\" value=\"this is a browser POST test\">")

    console.log("\nOr issue this curl GET command in another terminal:")

    console.log("  \x1b[33mcurl -X GET %s\x1b[0m",  "http://" + ip + ":" + port + "/laml?Body=This%20is%20a%20curl%20GET%20test")
    console.log("  \x1b[33mcurl -X GET %s\x1b[0m",  "http://" + eip + ":" + port + "/laml?Body=This%20is%20a%20curl%20GET%20test")

    console.log("\nand/or for curl POST")

    console.log('  \x1b[33mcurl -X POST --data-urlencode "Body=This is a curl POST test" %s\x1b[0m',  'http://' + ip + ':' + port + '/laml')
    console.log('  \x1b[33mcurl -X POST --data-urlencode "Body=This is a curl POST test" %s\x1b[0m',  'http://' + eip + ':' + port + '/laml\n')

    console.log('To thoroughly test this section for ensuring all call back types are working you would:\n' +
                '    1. Uncomment and set \x1b[33mla = ?\x1b[0m var in server, set in dashboard \x1b[33mLaML App > DELIVERED > METHOD > GET\x1b[0m, do a browser or curl test\n' +
                '         and see (3) GET callbacks. (1) for \x1b[33mqueued\x1b[0m (1) for \x1b[33msent\x1b[0m, and (1) for \x1b[33mdelivered\x1b[0m. Might possibly see a \x1b[33mfailure\x1b[0m depending\n' +
                '    2. Change your \x1b[33mLaML App > DELIVERD > METHOD > POST\x1b[0m, send another browser/curl test, watch for (3) POST callbacks\n' +
                '    3. Comment \x1b[33mla = ?\x1b[0m, uncomment and set \x1b[33mcb = \'http://'+ eip + ':' + port + '/status\'\x1b[0m and test again.\n' +
                'When using \x1b[33mApplicationSid\x1b[0m (var la), callback method can be GET or POST. When using \x1b[33mStatusCallback\x1b[0m (var cb), it is POST only.\n' +
                'if you are specifying both in your REST API request to SignalWire, the StatusCallback will be honored, and the other ignored\n')  } else {
  console.log("ERROR: Please give variables \"ip=" + ip + "\" and \"port=" + port + "\" proper values")
}
/////////////////////////////////////////////////////////
// END MINIMUM SERVER FOR STATUS CALLBACKS - GET AND POST
/////////////////////////////////////////////////////////
