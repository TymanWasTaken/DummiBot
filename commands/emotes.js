const {randColor} = require("../funcs.js")
const paginationEmbed = require("discord.js-pagination")
Discord = require("discord.js")
module.exports = {
	name: 'emotes',
	category: 'info',
	description: 'Show the emotes of the guild',
	async execute(message, args) {
		let emojiArray = [];
		let emojis = message.guild.emojis.cache.array();
		let embeds = [];
		while (emojis.length > 0) emojiArray.push(emojis.splice(0, 15));
		for (let i = 0; i < emojiArray.length; i++) {
			embeds[i] = new Discord.MessageEmbed()
			.setTitle(`Emojis:`)
			.setDescription(emojiArray[i].join("\n") + "\n\n\nThe emotes are time of adding based (not name)")
			.setColor(randColor())
		}
		paginationEmbed(message, embeds, ["◀", "▶"])
	},
};
