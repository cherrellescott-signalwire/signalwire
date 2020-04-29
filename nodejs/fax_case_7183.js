const { RestClient } = require('@signalwire/node')
const client = new RestClient(process.env.PROJECT_KEY,
			      process.env.API_TOKEN,
			      { signalwireSpaceUrl: process.env.SPACE_URL })

client.fax.faxes
    .create({
	from: process.env.PHONE_NUMBER,
	//to: process.env.FAX_NUMBER,
	to: '+19093859988',
	mediaUrl: process.env.FAX_MEDIA,
	Ttl: '1'
    })
    .then(fax => console.log(fax.sid))
    .done();
