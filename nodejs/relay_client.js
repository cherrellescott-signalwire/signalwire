const dotenv = require('dotenv');
dotenv.config();

const { RelayClient } = require('@signalwire/node')
const client = new RelayClient({
    project: process.env.PROJECT_KEY,
    token: process.env.API_TOKEN
})

client.on('signalwire.ready', async (client) => {

  const dialResult = await client.calling.dial({
    type: 'phone',
    from: '+13342120123',
    to: '+19312989898'
  })

  if (dialResult.successful) {
    const { call } = dialResult
    // Your call has been answered..
  }
})

client.connect()
