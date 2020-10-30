Discord = require("discord.js")
module.exports = {
	name: 'emotes',
	description: 'Show the emotes of the guild',
	async execute(message, args) {
		var embed = new Discord.MessageEmbed()
			.setTitle(`${message.guild.name} emotes:`)
			.setDescription(`${message.guild.emojis.cache.array().join(" ")}`)
			.setColor(0xb000ff)
			try {
				await message.channel.send(embed);
			}
			catch {
				await message.reply("Cannot send message, are there too many emojis?")
			}
	},
};