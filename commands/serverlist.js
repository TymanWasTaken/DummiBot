module.exports = {
	name: 'serverlist',
	category: 'bot maker',
	description: 'show servers DummiBot is in!',
	check(message) {
		return message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129
	},
	    async execute(message, args) {
        message.client.guilds.cache.array().forEach(e => {
            message.channel.send(e.name)
        })
    },
};