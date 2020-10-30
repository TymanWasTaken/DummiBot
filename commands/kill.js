const randomImages = [
	'https://media1.tenor.com/images/66eb6a312af9a99be2b42bf45c0068c7/tenor.gif?itemid=17982088',
	'https://media.tenor.com/images/d08da0153edb0797eeb0b9a07a6af556/tenor.gif',
	'https://media.tenor.com/images/afe7f07361276c7d6a33c57c9363e71c/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'kill',
	description: 'kill someone',
	async execute(message, args) {
		if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("Wh- Yo-...Kill me??? Why?")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
		let embed = new Discord.MessageEmbed()
		.setTitle('BAM')
		.setDescription(`<@${message.author.id}> shot ${args[0]}!!`)
		.setImage(randomImage)
		.setColor(0xb000ff)
		await message.channel.send(embed);
	},
};