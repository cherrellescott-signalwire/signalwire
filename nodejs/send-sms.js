const { RelayConsumer } = require('@signalwire/node')
const dotenv = require('dotenv');
dotenv.config();

/// See handle-messages.js to see how to handle inbound SMS/MMS within the Consumer!

const consumer = new RelayConsumer({
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN,
    contexts: ['home'],
    teardown: (consumer) => {
	console.log('teardown now and close.')
    },
    ready: async ({ client }) => {
	// Once the Consumer is ready send an SMS
	const params = {
	    context: 'home',
	    from: process.env.PHONE_NUMBER,
	    to: process.env.CELL_NUMBER,
	    body: 'Welcome at SignalWire!',
	    mediaUrl: 'http://ezra.joshebosh.com/joshebosh/pics/CaptainComic1.png',
	    medaiUrl: 'http://ezra.joshebosh.com/joshebosh/pics/josheboshGIF.gif',
	    mediaUrl: 'http://ezra.joshebosh.com/joshebosh/pics/444_test.png"'
	}
	const { successful, messageId } = await client.messaging.send(params)
	if (!successful) {
	    console.error('Error sending the SMS')
	    return
	}

	console.log('Message ID: ', messageId)
    },
    onMessageStateChange: (message) => {
	// Keep track of your SMS state changes
	console.log('Message state changed', message.id, message.state)
    }
})

consumer.run()
