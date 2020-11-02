module.exports = {
	name: 'clean',
	category: 'moderation',
	description: 'Clean all messages in current channel send by DummiBot.',
	check(message) {
		return message.member.permissionsIn(message.channel).has('MANAGE_MESSAGES')
	},
	async execute(message, args) {
		if (!args[0]) return message.reply("Please give an amount of messages to search through")
		if (Number(args[0]) > 50) return message.reply("There is a maximum of 50 messages")
		if (Number(args[0]) < 0) return message.reply("You can't clear less than 0.")
		try {
			await message.channel.bulkDelete(Number(args[0]) + 1)
		}
		catch {
			return message.reply("Error deleting, please make sure the messages are less than two weeks old.")
		}
    },
};