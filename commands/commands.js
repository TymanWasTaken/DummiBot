const {paginate, randColor} = require("../funcs.js")
Discord = require("discord.js")
const names = {
	'help': 'Help commands',
	'info': 'Information commands',
	'music': 'Music commands',
	'utility': "Uitlity commands",
	'bot maker': "Developer commands",
	'fun': 'Fun commands',
	'emotion': 'Emotion commands',
	'actions': 'Actions commands',
	'support': 'Support commands',
	'moderation': 'Moderation commands',
	'admin': "Admin commands"
}
module.exports = {
	name: 'commands',
	category: 'help',
	description: 'Get this message.',
	async execute(message, args) {
		let categories = [];
		let embeds = [];
		let runnableCommands = [];
		message.client.commands.forEach(e => {
			// if (e.check !== undefined && e.check(message)) {
			// 	desc = desc + `**${e.name}**: ${e.description}\n`
			// }
			// else if (e.check === undefined) {
			// 	desc = desc + `**${e.name}**: ${e.description}\n`
			// }
			if (!categories.includes(e.category)) {
				categories.push(e.category)
			}
			if (e.check) {
				if (e.check(message)) {
					runnableCommands.push(e)
				}
			}
			else {
				runnableCommands.push(e)
			}
		});
		let niceCategories = "";
		const color = randColor()
		for (let i = 0; i < categories.length; i++) {
			embeds[i] = new Discord.MessageEmbed()
			.setTitle(names[categories[i]] || categories[i])
			.setThumbnail(message.guild.iconURL())
			.setColor(color)
			for (item of message.client.commands.filter(e => e.category === categories[i]).sort().array()) {
				if (!runnableCommands.includes(item)) continue;
				embeds[i].addField(item.name, item.description, true)
			}
		}
		embeds.forEach(e => {
			if (e.fields.length === 0) {
				embeds.splice(embeds.indexOf(e), 1);
			}
		});
		embeds.forEach(e => {
			niceCategories = niceCategories + `${e.title}\n\n`
		});
		let firstEmbed = new Discord.MessageEmbed() 
		.setTitle("Command categories")
		.setDescription(niceCategories)
		.setColor(color)
		embeds.unshift(firstEmbed)
		paginate(message, embeds)
	},
};