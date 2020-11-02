const {randColor} = require("../funcs.js")
const randomImages = [
    'https://media.tenor.com/images/0c9113f85ba4a58c4d10ecf444cae6bb/tenor.gif',
    'https://media.tenor.com/images/94664693a59fced0a8eebbe7a176753c/tenor.gif',
    'https://media.tenor.com/images/b23637ddd52fd137f81be9296444975b/tenor.gif',
    'https://media.tenor.com/images/bc1ba42c8180b34e114c3e25b61796e8/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'punch',
	category: 'actions',
	description: 'Punch someone',
	async execute(message, args) {
		if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("Ouch! What did you do that for!")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
		let embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> punches ${args[0]}!!`)
		.setImage(randomImage)
		.setColor(randColor())
		await message.channel.send(embed);
	},
};