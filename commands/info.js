const {randColor} = require("../funcs.js")
function getUptime(client) {
	let totalSeconds = (client.uptime / 1000);
	let days = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = Math.floor(totalSeconds % 60);
	let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
	let noSecUptime = `${days} days, ${hours} hours and ${minutes} minutes`;
	return {uptime: uptime, noSecUptime: noSecUptime};
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
Discord = require("discord.js")
module.exports = {
	name: 'info',
	category: 'info',
	description: 'Get general info about the bot.',
	async execute(message, args) {
		let uptime = getUptime(message.client).uptime;
		var m = await message.channel.send('calculating...')
		await m.edit('calculated!')
		var embed = new Discord.MessageEmbed()
		.setTitle(`Bot Info:`)
		.addField(`Bot makers:`, `𝒯𝒽𝑒__𝒟𝓊𝓂𝓂𝒾#6470 \nTyman#0001`, true)
		.addField(`Latency is:`, `${m.createdTimestamp - message.createdTimestamp} ms.`, true)
		.addField(`Servers:`, `${message.client.guilds.cache.array().length}.`, true)
        .addField(`Uptime:`, `${uptime}`, true)
		.setColor(randColor()) 
		await message.channel.send(embed);
	},
};