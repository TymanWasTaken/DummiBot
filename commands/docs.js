const got = require("got")
Discord = require("discord.js")
module.exports = {
	name: 'docs',
	description: 'Gets methods for a class',
	async execute(message, args) {
		got.get('https://raw.githubusercontent.com/discordjs/discord.js/docs/stable.json').then(async response => {
		const body = JSON.parse(response.body)
		let classes = new Discord.Collection();
		body.classes.forEach(e => {
			classes.set(e.name, e)
		});
		let findClass = (message) => {
			return classes.find(e => e.name.toLowerCase() == message.content.replace("~docs ", "").toLowerCase()) || null
		};
		let c = findClass(message);
		if (c === null) {
			return message.reply("Could not find that class!")
		}
		else {
			if (c.props === undefined || c.methods === undefined) {
				let embed = new Discord.MessageEmbed()
				.setTitle(c.name)
				.setDescription(`${c.description.replace("<warn>","```").replace("</warn>","```")}\n\n[Docs link](http://discord.js.org/#/docs/main/stable/class/${c.name})`)
				.setFooter("For this class either there was not a single method or there wan not a single property. This caused me to exclude both, because if it didn't it would make the programers' life much harder.")
				return message.channel.send(embed)
			}
			let props = "";
			c.props.forEach(e => {
				props = `${props}**${e.name}**: ${e.description}\n\n`
			})
			let meths = "";
			c.methods.forEach(e => {
				meths = `${meths}**${e.name}**: ${e.description}\n\n`
			})
			let embed = new Discord.MessageEmbed()
			.setTitle(c.name)
			.setDescription(`${c.description.replace("<warn>","```").replace("</warn>","```")}\n\n[Docs link](http://discord.js.org/#/docs/main/stable/class/${c.name})`)
			.addField("| Properties", props, true)
			.addField("| Methods", meths, true)
			return message.channel.send(embed).catch(e => {
				let propsSlim = "";
				c.props.forEach(e => {
					propsSlim = `${propsSlim}${e.name}\n\n`
				})
				let methsSlim = "";
				c.methods.forEach(e => {
					methsSlim = `${methsSlim}${e.name}\n\n`
				})
				let embedSlim = new Discord.MessageEmbed()
				.setTitle(c.name)
				.setDescription(`${c.description}\n\n[Docs link](http://discord.js.org/#/docs/main/stable/class/${c.name})`)
				.addField("| Properties", props, true)
				.addField("| Methods", meths, true)
				.setFooter("This response was minified to get around the discord character limit")
				message.channel.send(embedSlim).catch(e => {
					let embedSuperSlim = new Discord.MessageEmbed()
					.setTitle(c.name)
					.setDescription(`${c.description.replace("<warn>","```").replace("</warn>","```")}\n\n[Docs link](http://discord.js.org/#/docs/main/stable/class/${c.name})`)
					.setFooter("This response was super minified to get around the discord character limit")
					message.channel.send(embedSuperSlim)
				})
			})
		}
	});
},
};