const fs = require("fs")
module.exports = {
	name: 'setprefix',
	description: 'Sets the prefix for the current server, must have manage server permission',
	check(message) {
		return message.member.hasPermission("MANAGE_GUILD")
	},
	async execute(message, args) {
		if (args[0]) {
			let data = fs.readFileSync("data.json")
			let json = JSON.parse(data)
			json.prefixes[message.guild.id] = args.join(" ")
			fs.writeFileSync("data.json", JSON.stringify(json))
			await message.reply(`Changed the prefix for this server to \`${args[0]}\``)
		}
		else {
			let data = fs.readFileSync("data.json")
			let json = JSON.parse(data)
			delete json.prefixes[message.guild.id]
			fs.writeFileSync("data.json", JSON.stringify(json))
			await message.reply(`Changed the prefix for this server to the default! (\`~\`)`)
		}
	}
} 