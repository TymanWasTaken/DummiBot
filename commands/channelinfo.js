const {randColor} = require("../funcs.js")
const channelTypes = {
	dm: 'DM',
	group: 'Group DM',
	text: 'Text Channel',
	voice: 'Voice Channel',
	category: 'Category',
	unknown: 'Unknown'
}
function capitalize(name) {
	name = name.toLowerCase();
	return name.charAt(0).toUpperCase() + name.slice(1)
}
Discord = require("discord.js")
module.exports = {
	name: 'channelinfo',
	category: 'info',
	description: `Get general info for this or a channel.\nUse ~channelinfo [channel mention] if you want to see info about a different channel.`,
	async execute(message, args) {
		const channel = message.mentions.channels.array()[0] || message.channel;
		if (!channel) {
			return message.reply('please enter a valid channel.');
		}
		var embed = new Discord.MessageEmbed()
		.setColor(randColor())
		.setThumbnail(message.guild.iconURL())
		.setTitle('Channel Info')
		.addField('| Name', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
		.addField('| ID', channel.id, true)
		.addField('| Creation Date', channel.createdAt.toDateString(), true)
		.addField('| NSFW', channel.nsfw ? 'Yes' : 'No', true)
		.addField('| Category', channel.parent ? channel.parent.name : 'None', true)
		.addField('| Type', channelTypes[channel.type], true)
		.addField('| Topic', channel.topic || 'None', true);
		message.channel.send(embed);
	},
};