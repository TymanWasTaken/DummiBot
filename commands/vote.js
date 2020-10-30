Discord = require("discord.js")
module.exports = {
	name: 'vote',
	description: 'vote links',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
			.setTitle('Upvote links to top.gg')
			.setDescription('Wolves Of Mars Lounge: https://top.gg/servers/689260593080696833/vote \nDummiBot: comming soon')
			.setColor(0xb000ff)
            await message.channel.send(embed);
    },
};