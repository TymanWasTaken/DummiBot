const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'avatar',
	category: 'info',
	aliases: ['av'],
	description: 'Get your avatar.\nUse ~avatar [user mention] to get their avatar.',
	async execute(message, args) {
		var url
		if (message.mentions.users.array()[0] === undefined) {
			url = message.author.displayAvatarURL()
		}
		else {
			url = message.mentions.users.array()[0].displayAvatarURL()
		}
		var embed = new Discord.MessageEmbed()
		.setDescription(`${args[0] || message.author.tag}'s avatar:`)
		.setColor(randColor())
		.setURL(url)
		.setImage(url);
		await message.channel.send(embed);
	},
};