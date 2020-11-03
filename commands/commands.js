const {paginate, randColor} = require("../funcs.js")
Discord = require("discord.js")
const names = {
	'help': 'Help commands',
	'info': 'Information commands',
	'music': 'Music commands',
	'utility': "Utility commands",
	'bot maker': "Developer commands",
	'fun': 'Fun commands',
	'emotion': 'Emotion commands',
	'actions': 'Actions commands',
	'support': 'Support commands',
	'moderation': 'Moderation commands',
	'admin': "Admin commands"
}
const nameWeight = {
	'fun': 0,
	'emotions': 1,
	'actions': 2,
	'info': 3,
	'music': 4,
	'utility': 5,
	'moderation': 6,
	'admin': 7,
	'help': 8,
	'support': 9,
	'bot maker': 10,
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
		categories = categories.sort((a, b) => {
			return nameWeight[a] - nameWeight[b];
		})
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
		for (const e of embeds) {
			if (e.fields.length == 0) {
				let i = embeds.indexOf(e)
				embeds.splice(i, 1);
			}
		}
		niceCategories = niceCategories + "**Page 1:** Categories list\n\n"
		embeds.forEach((e, i) => {
			niceCategories = niceCategories + `**Page ${i+2}:** ${e.title}\n\n`
		});
		let firstEmbed = new Discord.MessageEmbed() 
		.setTitle("Command categories")
		.setDescription(niceCategories)
		.setColor(color)
		embeds.unshift(firstEmbed)
		paginate(message, embeds)
	},
};