Discord = require("discord.js")
module.exports = {
	name: 'avatar',
	description: 'Shows the avatar of a user',
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
		.setColor(0xb000ff)
		.setURL(url)
		.setImage(url);
		await message.channel.send(embed);
	},
};