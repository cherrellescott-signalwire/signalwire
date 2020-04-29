const { RelayConsumer } = require('@signalwire/node')

const consumer = new RelayConsumer({
  project: 'YOU_PROJECT_ID',
  token: 'YOU_PROJECT_ID',
  contexts: ['home', 'office'],

  onIncomingCall: async (call) => {
    const { successful } = await call.answer()
    if (!successful) { return }

    await call.playTTS({ text: 'Welcome to SignalWire!' })
  }
})

consumer.run()
