const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'help',
	category: 'help',
	description: 'Get the help message.',
	async execute(message, args) {
var embed = new Discord.MessageEmbed()
		.setTitle('Help menu:')
		.setColor(randColor())
		.setDescription(`Open command list with ~commands. \nRun ~setup for a basic setup guide.\n~settings to see this server's settings.\n@DummiBot to see this server's prefix.\n\nJoin the support server for help [here](https://discord.gg/AJxtuxg)`);
        await message.channel.send(embed);
    },
};