const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'avatar',
	category: 'info',
	aliases: ['av'],
	description: 'Get your avatar.\nUse ~avatar [user mention] to get their avatar.',
	async execute(message, args) {
		let user = message.mentions.users.first() || message.author
		var embed = new Discord.MessageEmbed()
		.setDescription(`${args[0] || message.author.tag}'s avatar:`)
		.setColor(randColor())
		.setURL(user.displayAvatarURL())
		.setImage(user.displayAvatarURL());
		await message.channel.send(embed);
	},
};