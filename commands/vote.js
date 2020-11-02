const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'vote',
	category: 'support',
	description: 'Get links to vote.',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
			.setTitle('Upvote links to top.gg')
			.setDescription('[Wolves Of Mars Lounge](https://top.gg/servers/689260593080696833/vote) \n[DummiBot](comming soon)')
			.setColor(randColor())
            await message.channel.send(embed);
    },
};