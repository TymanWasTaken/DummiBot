module.exports = {
	name: 'ping',
	category: 'help',
	description: 'Get bot latency.',
	async execute(message, args) {
        var m = await message.channel.send(`pinging...`)
		m.edit(`pinged! \nBot latency: ${m.createdTimestamp - message.createdTimestamp}ms.`)
    },
};