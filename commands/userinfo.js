function capitalize(name) {
	name = name.toLowerCase();
	return name.charAt(0).toUpperCase() + name.slice(1)
}
Discord = require("discord.js")
module.exports = {
	name: 'userinfo',
	description: 'user info',
	async execute(message, args) {
		var boosted = "No";
		if (message.member.premiumSince !== null) boosted = "Yes"
		var embed = new Discord.MessageEmbed()
		.setColor(0xb000ff)    
		.setTitle('User info:')
		.setAuthor(message.author.tag)
		.setThumbnail(message.author.displayAvatarURL())
		.addField('| Tag', message.author.tag, true)
		.addField('| ID', message.author.id, true)
		.addField('| Boosted the server', boosted, true)
		if (message.member.premiumSince !== null) {
			months = Math.floor((new Date() - message.member.premiumSince) / 1000 / 60 / 60 / 24 / 30);
			days = Math.floor((new Date() - message.member.premiumSince) / 1000 / 60 / 60 / 24) - (months * 30);
			embed = embed.addField('| Time boosted', Math.floor(days) + " days").setFooter("Warning, this might be a bit off because it considers a month 30 days.")
		}
		let permissions = [];
		for (var i = 0; i < message.member.permissions.toArray().length; i++) {
			permissions.push("`" + capitalize(message.member.permissions.toArray()[i].replace(/_/g, " ")) + "`");
		}
		embed
		.addField('| User permissions', permissions, true)
		.addField('| Account creation date', new Date(message.author.createdTimestamp), true)
		.addField('| Join date', message.member.joinedAt, true)
		await message.channel.send(embed);
	},
};