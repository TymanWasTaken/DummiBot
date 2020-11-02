const {randColor} = require("../funcs.js")
const randomImages = [
	'https://media1.tenor.com/images/32ebf4ce9d93bce4b14dee893c26ce06/tenor.gif?itemid=16743302',
	'https://media1.tenor.com/images/d5288ab38105ac1f6ad50c17e5fd798c/tenor.gif?itemid=13648662',
	'https://media1.tenor.com/images/cfaf106e3c378873bf3138cc48eca4d7/tenor.gif?itemid=4605095',
	'https://media.tenor.com/images/7dcc89bc3962feb004f0626a3dfca600/tenor.gif',
	'https://media.tenor.com/images/7450bdc7a78afe8986b986875764d861/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'rip',
	category: 'emotion',
	description: 'Pay your respects.',
	async execute(message, args) {
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
var embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> says rest in peace...`)
		.setImage(randomImage)
		.setColor(randColor())
        await message.channel.send(embed);
    },
};