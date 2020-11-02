module.exports = {
	name: 'su',
	category: 'bot maker',
	description: 'Runs command as someone else, must use user id',
	check(message) {
		return message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129
	},
	async execute(message, args) {
		let m = message
		let member = message.guild.members.cache.get(args[0]) || null
		let command;
		try {
			command = require(`./${args[1]}.js`)
		}
		catch {
			return message.reply(`Invalid command`)
		}
		if (member === null) return message.reply(`User ${args[0]} is either invalid, or not in this server.`)
		m.author =  member.user
		m.member = member
		command.execute(m, args.splice(0, 2))
	}
}