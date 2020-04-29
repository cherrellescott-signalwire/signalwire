const { RelayConsumer } = require('@signalwire/node')

const consumer = new RelayConsumer({
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN,
    contexts: ['joshebosh'],
    teardown: (consumer) => {
	console.log('Consumer teardown. Cleanup..')
    },
    onIncomingCall: async (call) => {
	console.log('Inbound call', call.id, call.from, call.to)
	const answerResult = await call.answer()
	if (!answerResult.successful) {
	    console.error('Error during call answer')
	    return
	}

	const { RelayClient } = require('@signalwire/node')
	const client = new RelayClient({
	    project: process.env.PROJECT_KEY,
	    token: process.env.API_TOKEN
	})

	const connectResult = await call.connect({type: 'phone', from: call.from, to: '+19312989898'})
	if (connectResult.successful) {
	    console.log("calling now...")
	}
	await call.playAudio('https://cdn.signalwire.com/default-music/welcome.mp3')
	await call.hangup()
    }
})

consumer.run()
