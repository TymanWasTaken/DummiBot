const {randColor} = require("../funcs.js")
const randomImages = [
    'https://media.tenor.com/images/557723325e65671bae3f9cd061220c3e/tenor.gif',
    'https://media.tenor.com/images/b06d6a26b08516ac069b7a9acdd001e5/tenor.gif',
    'https://media.tenor.com/images/12aaaf60c46d563e3f8f2609f1df3c53/tenor.gif',
    'https://media.tenor.com/images/c84f8b2f69239643243ff50f33bb58e3/tenor.gif',
    'https://media.tenor.com/images/b3f77685f5fed03749ffff22a4c84dbb/tenor.gif',
    'https://media.tenor.com/images/4f6c5ad80164566034ff4854761651bf/tenor.gif',
    'https://media.tenor.com/images/c10697be7432f846149bf3c44deecefa/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'bite',
	category: 'actions',
	description: 'Bite someone',
	async execute(message, args) {
		if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("Wh- Yo-...Kill me??? Why?")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
		let embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> bites ${args[0]}!!`)
		.setImage(randomImage)
		.setColor(randColor())
		await message.channel.send(embed);
	},
};