module.exports = {
	name: 'emptymessage',
	description: 'Throws an empty message error',
	check(message) {
		return message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129
	},
	async execute(message, args) {
		message.channel.send("")
	}
}