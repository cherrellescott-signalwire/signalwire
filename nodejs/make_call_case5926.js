const util = require('util');
const dotenv = require('dotenv');
dotenv.config();


const host = process.env.SIGNALWIRE_API_HOSTNAME
const project = process.env.SIGNALWIRE_API_PROJECT
const token = process.env.SIGNALWIRE_API_TOKEN


const { RelayConsumer } = require('@signalwire/node')


console.log("project API -->" + process.env.SIGNALWIRE_API_PROJECT);

const consumer = new RelayConsumer({
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN,
    contexts: ['joshebosh'],
    ready: async (consumer) => {
	const dialResult = await consumer.client.calling.dial({
	    type: 'phone',
	    from: process.env.PHONE_NUMBER, // Must be a number in your SignalWire Space
	    to: process.env.CELL_NUMBER
	})
	const { successful, call } = dialResult
	if (!successful) {
	    console.error('Dial error..')
	    return
	}

	const connectResult = await call.connect(
	    { type: 'phone', to: "+17742989898" }
	)
		//const playResult  = play.play({ type: 'audio', url: 'https://cdn.signalwire.com/default-music/welcome.mp3' });
	}
    });

consumer.run()



/*
const { RelayConsumer } = require('@signalwire/node')

const consumer = new RelayConsumer({
    // PROD CREDS
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN,

    // DEV CREDS
    //project: 'd57f84eb-f845-46c9-9091-6424f65057e5',
    //token: 'PT0db3f756d734d9ae154fec1a10e82dffeacba3c821ae6995'

    contexts: ['joshebosh'],
    ready: async (consumer) => {
	const dialResult = await consumer.client.calling.dial({
	    type: 'phone',
	    from: process.env.PHONE_NUMBER, // Must be a number in your SignalWire Space
	    to: process.env.CELL_NUMBER
	})
	const { successful, call } = dialResult
	if (!successful) {
	    console.error('Dial error..')
	    return
	}

	const prompt = await call.promptTTS({
	    type: 'digits',
	    digits_max: 3,
	    text: 'Welcome to SignalWire! Enter your 3 digits PIN'
	})

	if (prompt.successful) {
	    console.log(`User digits: ${prompt.result}`)
	}
    }
});

consumer.run()
*/




/*
const { RelayClient } = require('@signalwire/node')

const client = new RelayClient({

    // PROD CREDS
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN

    // DEV CREDS
    //project: 'd57f84eb-f845-46c9-9091-6424f65057e5',
    //token: 'PT0db3f756d734d9ae154fec1a10e82dffeacba3c821ae6995'
})

var FROM = process.env.PHONE_NUMBER;
var TO = process.env.CELL_NUMBER;

console.log("phone numbers  are: " + FROM + " and " + TO)

client.on('signalwire.ready', async (client) => {
    console.log("creds are: " + process.env.PROJECT_KEY + " and " + process.env.API_TOKEN)
    makeCall().catch(console.error)
});

client.connect().catch(error => { console.log(error); });

async function makeCall() {
    const dialResult = await client.calling.dial({
       type: 'phone',
       from: FROM,
       to: TO,
       timeout: 30
    });

    //console.log(dialResult.component.call.relayInstance)

    if (dialResult.successful) {
	const { call } = dialResult
    } else {
	console.log("failed call details:\n" + util.inspect(dialResult))
    };
};
*/
