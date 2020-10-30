const randomImages = [
    'https://media1.tenor.com/images/b7cded2e6c866a147425f525eeb1e56e/tenor.gif?itemid=12559094',
    'https://media.tenor.com/images/bffacfd4929e61396e4eec85077efe89/tenor.gif',
    'https://media.tenor.com/images/8367c8974b349e6f7222c4f6fafc0d21/tenor.gif',
    'https://media.tenor.com/images/e04568f1ce59a1cc453e42956521c596/tenor.gif'

]
Discord = require("discord.js")
module.exports = {
	name: 'yeet',
	description: 'yeet args',
	async execute(message, args) {
        if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("Wh- Yo-... Why?")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
	var embed = new Discord.MessageEmbed()
    .setTitle('YA YEEET!!!')
    .setDescription(`<@${message.author.id}> Yeeted ${args[0]}!!`)
    .setImage(randomImage)
    .setColor(0xb000ff)
    await message.channel.send(embed);
    },
};
