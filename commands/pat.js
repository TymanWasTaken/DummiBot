const randomImages = [
    'https://media1.tenor.com/images/e01e09d8e27c7247314b3dd611f47007/tenor.gif?itemid=13912621',
    'https://media1.tenor.com/images/b7ddddf6d6da303dcdc3823959192b42/tenor.gif?itemid=15586999',
    'https://media1.tenor.com/images/be0c22e0af951aa7fa8753381663eb2c/tenor.gif?itemid=15824856',
    'https://media1.tenor.com/images/c3fe204c1bf0f81787fba429e6194827/tenor.gif?itemid=11455730'
    

]
Discord = require("discord.js")
module.exports = {
	name: 'pat',
	description: 'pat someone',
	async execute(message, args) {
        if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("Awh, thank you!")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
	var embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}> pats ${args[0]}!!`)
    .setImage(randomImage)
    .setColor(0xb000ff)
    await message.channel.send(embed);
    },
};
