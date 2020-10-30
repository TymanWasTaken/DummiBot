const randomImages = [
	'https://media1.tenor.com/images/b93a212c42e0630c534d90c386b221f3/tenor.gif?itemid=16358959',
	'https://media1.tenor.com/images/a01f77ceac702de9352ebfe96db19642/tenor.gif?itemid=14349965',
	'https://media1.tenor.com/images/e4a2e558234284ea158baf335fec447b/tenor.gif?itemid=11875188',
	'https://media1.tenor.com/images/c07a0e54601516dbf8b399832636507a/tenor.gif?itemid=13765417',
	'https://media1.tenor.com/images/ea9df861113fecec5bb17bf1faa0124e/tenor.gif?itemid=3950966'

]
Discord = require("discord.js")
module.exports = {
	name: 'hello',
	description: 'SW meme',
	async execute(message, args) {
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
var embed = new Discord.MessageEmbed()
		.setDescription(`hello there, general <@${message.author.id}>`)
		.setImage(randomImage)
		.setColor(0xb000ff)
        await message.channel.send(embed);
    },
};