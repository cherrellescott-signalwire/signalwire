// npm install request
var request = require('request');
var dotenv = require('dotenv');
dotenv.config();

const util = require('util');

const express = require('express');
const server = express();

var user = process.env.PROJECT_KEY
var pass = process.env.API_TOKEN
var swurl = process.env.SPACE_URL
var ip = process.env.IP
var port = process.env.PORT

var creds = user + ':' + pass;
var auth = "Basic " + Buffer.from(user + ":" + pass).toString("base64");


server.get("/jwt", async (req,res) => {
    console.log('entering /jwt GET function')
    console.log('\n\nRequest Body:\n' + JSON.stringify(req.query) + '\n\n');
    //console.log("GET req: " + util.inspect(req))

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send("this is a resposne")
    // process the GET request
    //requestHandler(req,res,'GET')
});

const bp = require('body-parser');
server.use(bp.urlencoded({ extended: true }));
server.post("/jwt", async (req,res) => {
    console.log('entering /sendSMS POST function')
    console.log('\n\nRequest Body:\n' + JSON.stringify(req.body) + '\n\n');
    //console.log("post req: " + util.inspect(req))

    request({
	url: "https://" + swurl + "/api/relay/rest/jwt",
	headers: { "Authorization": auth },
	method: "POST",
	json: true,
    }, function (error, response, body){
	jwt = response.body.jwt_token
	console.log(response.body.jwt_token);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send(jwt)
    });

    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.send(jwt)
    //requestHandler(req,res,'POST')
});

const http = require('http');
const options = {
    host: ip,
    port: port
}
var httpServer = http.createServer(options, server)
httpServer.listen(port);
