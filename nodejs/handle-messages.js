var request = require('request');
var dotenv = require('dotenv');
dotenv.config();

const util = require('util');

const { RelayConsumer } = require('@signalwire/node')

const consumer = new RelayConsumer({
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN,
    contexts: ['joshebosh'],
    teardown: (consumer) => {
	console.log('Consumer teardown. Cleanup..')
    },
    onIncomingMessage: (message) => {
	console.log('Message received on context:', message.context)
	console.log(message.from)
	console.log(message.to)
	console.log(message.body)

	// HANDLE FORWARDING TO OTHER ARBITRARY SERVER VIA POST REQUEST
	// MY EXAMPLE HERE IS, I'M FORWARDING TO SIGNALWIRE TO DELIVER TO MY PHONE, BUT THIS IS A GENERIC METHOD NOT USING THE SIGNALWIRE LIBRARY, SO SHOULD BE APPLICABLE TO FORWARDING TO ANY SERVER OF YOUR CHOICE ABLE TO HANDLE POST REQUESTS
	var user = process.env.PROJECT_KEY
	var pass = process.env.API_TOKEN
	var swurl = process.env.SPACE_URL
	var ip = process.env.IP
	var port = process.env.PORT
	var creds = user + ':' + pass;
	var auth = "Basic " + Buffer.from(user + ":" + pass).toString("base64");
	//var jsonObj = { To: process.env.CELL_NUMBER, From: process.env.PHONE_NUMBER, Body: "this is a test" }
	// I HAD TO USE THIS NEXT LINE "From" ENV TO AVOID LOOPBACK SMS TO SAME NUMBER
	var jsonObj = { To: message.from, From: process.env.PHONE_NUMBER, Body: message.body }
        // YOU WOULD PROBABLY USE THIS NEXT LINE FOR FORWARDING
	//var jsonObj = { To: message.from, From: message.to, Body: message.body }
	request({
	    //url: "https://" + swurl + "/api/relay/rest/jwt",
	    url: "https://" + swurl + "/api/laml/2010-04-01/Accounts/" + user + "/Messages.json",
	    headers: { "Authorization": auth },
	    method: "POST",
	    body: jsonObj,
	    json: true
	}, function (error, response, body){
	    console.log("error:\n" + util.inspect(error));
	    console.log("response:\n" + util.inspect(response));
	    console.log("body:\n" + util.inspect(body));
	    //jwt = response.body.jwt_token
	    //console.log(response.body.jwt_token);
	    //res.header("Access-Control-Allow-Origin", "*");
	    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	    //res.send(jwt)
	});
    }
});

consumer.run()
