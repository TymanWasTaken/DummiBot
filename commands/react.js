module.exports = {
	name: 'react',
	description: 'react random server emotes to your last message! (usefull for announcements!)',
	async execute(message, args) {
		if (!args[0]) return await message.reply("Please specify a number of reactions to add")
		if (Number(args[0]) > 20 || Number(args[0]) < 1) return await message.reply("Please specify a number between 1 and 20")
		if (message.guild.emojis.cache.filter(e => e.animated).array() === []) return await message.reply("You have no animated emojis!")
		if (message.guild.emojis.cache.filter(e => e.animated).array() > Number(args[0])) return await message.reply("You don't have enough animated emojis!")
		await message.delete()
		let m = await message.channel.messages.fetch({limit:1})
		m = m.array()[0]
		function randomEmojis() {
			let choices = new Discord.Collection()
			let choicesLeft = message.guild.emojis.cache.filter(e => e.animated)
			let curChoice = "";
			for (let i = 0; i < Number(args[0]); i++) {
				curChoice = choicesLeft.randomKey()
				choices.set(curChoice, choicesLeft.get(curChoice))
				choicesLeft.delete(curChoice)
			}
			return choices
		}
		try {
			let emojis = randomEmojis()
			for (let i = 0; i < emojis.size; i++) {
				await m.react(emojis.array()[i]);
			}
		}
		catch (error){
			return message.channel.send(error)
		}
		
	},
};
