const { RelayConsumer } = require('@signalwire/node');

const consumer = new RelayConsumer({
  project: 'YOU_PROJECT_ID',
  token: 'YOU_PROJECT_ID',
  contexts: ['joshebosh'],
  onIncomingMessage: async (message) => {
    // Handle the inbound message here..
    console.log('Received message', message.id, message.context);
    send(message.from, message.to);
  }
});

const send = async function(toNumber, fromNumber) {
    console.log('we here', toNumber, fromNumber);
    const result = await consumer.client.messaging.send({
        context: 'default',
        from: fromNumber,
        to: toNumber,
        body: 'Hello, I exist.'
    });

    if (result.successful) {
        console.log('Send success', result.messageId);
    } else {
        console.error(result.result);
    }
}

consumer.run();
