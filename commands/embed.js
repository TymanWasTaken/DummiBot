const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
    name: 'embed',
    category: 'utility',
	description: 'Make an embedded message.',
	async execute(message, args) {
	parts = args.join(" ").split("/")
    if (!parts[0] || !parts[1]) return message.reply("You must give a title and description, seperate fields with `/`.")
    var embed = new Discord.MessageEmbed()
    .setTitle(parts[0])
    .setDescription(parts[1])
    .setColor(randColor())
    await message.channel.send(embed); 
    },
};