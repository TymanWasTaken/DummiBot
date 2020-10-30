Discord = require("discord.js")
module.exports = {
	name: 'link',
	description: 'link to support server',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
		.setTitle('Support server link:')
		.setDescription('https://discord.gg/AJxtuxg')
		.setColor(0xb000ff)
		await message.channel.send(embed);
    },
};