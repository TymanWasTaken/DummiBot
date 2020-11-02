const {randColor} = require("../funcs.js")
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
Discord = require("discord.js")
module.exports = {
	name: 'bubbleplastic',
	category: 'fun',
	description: 'Pop bubbleplastics.',
	async execute(message, args) {
		var embed = new Discord.MessageEmbed()
			.setColor(randColor())
			.setTitle('pop bubbleplastics!!')
			.setDescription('\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||')
            await message.channel.send(embed);
},
};