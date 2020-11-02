const {randColor} = require("../funcs.js")
function capitalize(name) {
	name = name.toLowerCase();
	return name.charAt(0).toUpperCase() + name.slice(1)
}
Discord = require("discord.js")
module.exports = {
	name: 'userinfo',
	category: 'info',
	description: 'Get info about your discord account. \nUse ~userinfo [user mention] to see mentioned users info.',
	async execute(message, args) {
		let member;
		if (message.mentions.users.array()[0]) member = await message.guild.members.fetch(message.mentions.users.array()[0].id);
		else member = message.member;
		var boosted = "No";
		if (member.premiumSince !== null) boosted = "Yes"
		var embed = new Discord.MessageEmbed()
		.setColor(randColor())    
		.setTitle('User info:')
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.displayAvatarURL())
		.addField('| Tag', member.user.tag, true)
		.addField('| ID', member.user.id, true)
		.addField('| Boosted the server', boosted, true)
		if (member.premiumSince !== null) {
			months = Math.floor((new Date() - member.premiumSince) / 1000 / 60 / 60 / 24 / 30);
			days = Math.floor((new Date() - member.premiumSince) / 1000 / 60 / 60 / 24) - (months * 30);
			embed = embed.addField('| Time boosted', Math.floor(days) + " days").setFooter("Warning, this might be a bit off because it considers a month 30 days.")
		}
		let permissions = [];
		for (var i = 0; i < member.permissions.toArray().length; i++) {
			permissions.push("`" + capitalize(member.permissions.toArray()[i].replace(/_/g, " ")) + "`");
		}
		embed
		.addField('| User permissions', permissions, true)
		.addField('| Account creation date', new Date(member.user.createdTimestamp), true)
		.addField('| Join date', member.joinedAt, true)
		await message.channel.send(embed);
	},
};