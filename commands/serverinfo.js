function capitalize(name) {
	name = name.toLowerCase();
	return name.charAt(0).toUpperCase() + name.slice(1)
}
Discord = require("discord.js")
module.exports = {
	name: 'serverinfo',
	description: 'server info',
	async execute(message, args) {
let bots = 0;
for (var i = 0; i < message.guild.members.cache.array().length; i++) {
    if (message.guild.members.cache.array()[i].user.bot) bots++
}
var embed = new Discord.MessageEmbed()
.setColor(0xb000ff)    
.setTitle('Server info:')
.setThumbnail(message.guild.iconURL())
.addField('| Server owner', message.guild.owner, true)
.addField('| Server name', message.guild.name, true)
.addField('| Server creation date', new Date(message.guild.createdTimestamp), true)
.addField('| Server region', capitalize(message.guild.region), true)
.addField('| Partnered', message.guild.partnered ? 'Yes' : 'No', true)
.addField(`| Date you joined`, message.member.joinedAt, true)
.addField('| Member count',message.guild.memberCount, true)
.addField('| Bot count',bots, true)
.addField('| Roles count', message.guild.roles.cache.array().length, true)
.addField('| channel count', message.guild.channels.cache.array().length, true)
.addField('| Emote count', message.guild.emojis.cache.array().length, true)
.addField('| Server boosts', message.guild.premiumSubscriptionCount, true)
.addField('| Boost tier', message.guild.premiumTier, true)
await message.channel.send(embed);
    },
};