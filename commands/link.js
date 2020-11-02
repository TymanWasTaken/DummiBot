const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'link',
	category: 'support',
	description: 'Get a link to the support server.',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
		.setTitle('Support server link:')
		.setDescription('[DummiBot support server](https://discord.gg/AJxtuxg)')
		.setColor(randColor())
		await message.channel.send(embed);
    },
};