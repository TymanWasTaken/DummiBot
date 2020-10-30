Discord = require("discord.js")
module.exports = {
	name: 'help',
	description: 'help commands',
	async execute(message, args) {
var embed = new Discord.MessageEmbed()
		.setTitle('Help menu:')
		.setColor(0xb000ff)
		.setDescription(`Open command list with ~commands. \nJoin the support server for help with ~link.`);
        await message.channel.send(embed);
    },
};