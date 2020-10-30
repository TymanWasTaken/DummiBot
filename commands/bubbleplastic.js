function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
Discord = require("discord.js")
module.exports = {
	name: 'bubbleplastic',
	description: 'pop bubbleplastics!',
	async execute(message, args) {
		var embed = new Discord.MessageEmbed()
			.setColor(0xb000ff)
			.setTitle('pop bubbleplastics!!')
			.setDescription('\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||\n||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||')
            await message.channel.send(embed);
},
};