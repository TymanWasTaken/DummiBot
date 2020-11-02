const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'invite',
	category: 'support',
	description: 'Get invite link to invite the bot per permission',
	async execute(message, args) {
		var embed = new Discord.MessageEmbed()
		.setTitle(`Invite bot here:`)
		.setDescription(`Invite the bot per permission.`)
		.addField('No role (no perms)', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=0)', true)
		.addField('fully operational, with admin perm', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=8)', true)
		.addField('fully operational, without admin perm', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=2146958839)', true)
		.addField('fully operational, without unneeded perms', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=1983245414)', true)
		.addField('Fun commands only', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=84992)', true)
		.addField('Info commands only', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=85056)', true) // who would invite it for just this but ok
		.addField('emotion commands only', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=84992)', true) // who would invite it for just this but ok
		.addField('Utility commands only', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=85056)', true) // who would invite it for just this but ok
		.addField('Music commands only', 'click [here](https://discord.com/oauth2/authorize?client_id=741940149633679390&scope=bot&permissions=85056)', true)
		.setColor(randColor())
		await message.channel.send(embed);
	},
};