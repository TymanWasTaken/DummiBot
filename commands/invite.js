Discord = require("discord.js")
module.exports = {
	name: 'invite',
	description: 'invite command',
	async execute(message, args) {
var embed = new Discord.MessageEmbed()
.setTitle(`Invite bot here:`)
.setDescription(`https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=8`)
.setColor(0xb000ff)
await message.channel.send(embed);
    },
};