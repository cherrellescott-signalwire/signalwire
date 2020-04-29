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

/*
	call.on('answered', (call) => {
	    console.log("remote party answered call...")
	}).on('ended', (call) => {
	    console.log("call has ended")
	})
*/
	await call.playTTS({ text: 'Please hold while we connect you to an agent.', gender: 'male' })

/*
	//const { RelayClient } = require('@signalwire/node')
	//const client = new RelayClient({ project: process.env.PROJECT_KEY, token: process.env.API_TOKEN })
	//const agentCall = await this.client.calling.dial({ type: 'phone', from: '+13342120818', to: '+19312989898' })
	if (agentCall.successful) {
	    const { agent } = agentCall
	}
*/

//	const dialResult = await call.calling.dial({ type: 'phone', from: '+13342120123', to: '+19312989898' })

/*
	const connectResult = await call.connect({ type: 'phone', to: '+19312989898' })
	if (!connectResult.successful) {
	    console.error('Error during call connect!')
	    return
	}
*/
/*
	const ringingSuccess = await call.waitForRinging()
	if (ringingSuccess) {
	    const playResultCustomer = await call.playTTS({ text: 'Please hold while we connect you to an agent.', gender: 'male' })
	    //call.playAudio('https://cdn.signalwire.com/default-music/welcome.mp3')
	}
*/
/*	const answeredSuccess = await connectResult.call.waitForAnswered()
	if (answeredSuccess) {
	    // Here the incoming call has been connected with your number and within "connectResult.call" you have the leg "B"
	    const playResultAgent = await connectResult.call.playTTS({ text: 'you have a lead from such and such company', gender: 'male' })
	    //await connectResult.call.playAudio('https://cdn.signalwire.com/default-music/welcome.mp3')
	}
*/

/*
	// Hangup leg B and A..
	const endSuccess = await call.waitFor('ending', 'ended');
	if (endSuccess) {
	    //await connectResult.call.hangup()
	    await call.hangup()
	    //connectResult.call.hangup()
	    //call.hangup()
	}
*/
    }
})

consumer.run().catch( error => { console.log("you have consumer.run() error: ", error) })
