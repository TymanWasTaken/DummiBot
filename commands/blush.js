const {randColor} = require("../funcs.js")
const randomImages = [
    'https://media.tenor.com/images/2fcbb381572bcbc9fa3009b7f5c00a01/tenor.gif',
    'https://media.tenor.com/images/9a018d658fb18e8be2a9c7a2e21259d4/tenor.gif',
    'https://media.tenor.com/images/8e8f51d09d5e2ce2d2226efea8986a93/tenor.gif',
    'https://media.tenor.com/images/199170515a989a6d2a2077d72266e48f/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'blush',
	category: 'emotion',
	description: 'Blush for no reason.',
	async execute(message, args) {
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
		let embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> blushes...`)
		.setImage(randomImage)
		.setColor(randColor())
		await message.channel.send(embed);
	},
};