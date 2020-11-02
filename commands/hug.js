const {randColor} = require("../funcs.js")
const randomImages = [ 
    'https://media1.tenor.com/images/108c2257683620292f4687262f26e872/tenor.gif?itemid=17258498',
    'https://media1.tenor.com/images/2d4138c7c24d21b9d17f66a54ee7ea03/tenor.gif?itemid=12535134',
    'https://media1.tenor.com/images/8ac5ada8524d767b77d3d54239773e48/tenor.gif?itemid=16334628',
    'https://media1.tenor.com/images/fd47e55dfb49ae1d39675d6eff34a729/tenor.gif?itemid=12687187',
    'https://media1.tenor.com/images/f20151a1f7e003426ca7f406b6f76c82/tenor.gif?itemid=13985247',
    'https://media1.tenor.com/images/b7492c8996b25e613a2ab58a5d801924/tenor.gif?itemid=14227401'   
       

]
Discord = require("discord.js")
module.exports = {
    name: 'hug',
    category: 'actions',
	description: 'Hug someone.',
	async execute(message, args) {
        if (message.mentions.users.array([0])[0] === message.author.user) return message.channel.send("Are you this lonely?")
        if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("I'll hug you back!")
        if (args[0] === undefined) return message.channel.send("You must specify a user")
        const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
	var embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}> hugs ${args[0]}!!`)
    .setImage(randomImage)
    .setColor(randColor())
    await message.channel.send(embed);
    },
};
