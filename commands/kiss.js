const {randColor} = require("../funcs.js")
const randomImages = [
    'https://media.tenor.com/images/39fe167bdab90223bcc890bcb067b761/tenor.gif',
    'https://media.tenor.com/images/83bceada9e9a957a3909934de9c4a0f6/tenor.gif',
    'https://media.tenor.com/images/ec85a866a451e1a47008ac6a8534d1c4/tenor.gif',
    'https://media.tenor.com/images/84900d5c4088c08cac576f241bfe5d1a/tenor.gif',
    'https://media.tenor.com/images/a2b2a46aef7e20955412b15ffff1a9ce/tenor.gif',
    'https://media.tenor.com/images/894f7f8efac0f1af5206c66e8297f311/tenor.gif',
    'https://media.tenor.com/images/c0828ddd44542bc87a949cdf3d4d2488/tenor.gif',
    'https://media.tenor.com/images/e020fa4283bff46be4b6372891d323ac/tenor.gif',
    'https://media.tenor.com/images/4d1a91a7b23ddedb5ee16d3af7248bee/tenor.gif',
    'https://media.tenor.com/images/8046e6cd73eab8471f5d92e96a0d90f0/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'kiss',
	category: 'actions',
	description: 'Kiss someone.',
	async execute(message, args) {
		if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("Mhm, hugging me is fine but kissing is kinda next level!")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
		let embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> kisses ${args[0]}...`)
		.setImage(randomImage)
		.setColor(randColor())
		await message.channel.send(embed);
	},
};