Discord = require("discord.js")
module.exports = {
	name: 'commands',
	description: 'Shows the bot commands',
	async execute(message, args) {
		let desc = "";
		message.client.commands.forEach(e => {
			if (e.check !== undefined && e.check(message)) {
				desc = desc + `**${e.name}**: ${e.description}\n`
			}
			else if (e.check === undefined) {
				desc = desc + `**${e.name}**: ${e.description}\n`
			}
		});
		var embed = new Discord.MessageEmbed()
		.setColor(0xb000ff)
		.setThumbnail(message.guild.iconURL())
		.setDescription(desc)
		await message.channel.send(embed);
	},
};