const { Task } = require('@signalwire/node')

const yourTask = new Task('YOU_PROJECT_ID', 'YOU_PROJECT_ID')
const context = 'office'
yourTask.deliver(context, { 'key': 'value', 'data': 'data for your job' })
  .then(() => console.log('Task created successfully!'))
  .catch((error) => console.log('Error creating task!', error))
