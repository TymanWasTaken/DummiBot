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
	description: 'info command',
	async execute(message, args) {
		let uptime = getUptime(message.client).uptime;
		var m = await message.channel.send('calculating...')
		await m.edit('calculated!')
		var embed = new Discord.MessageEmbed()
		.setTitle(`Bot Info:`)
		.setDescription(`Bot maker: @𝒯𝒽𝑒__𝒟𝓊𝓂𝓂𝒾#6470 \nLatency is: ${m.createdTimestamp - message.createdTimestamp} ms. \nNumber of servers the bot is in: ${message.client.guilds.cache.array().length}.\nUptime: ${uptime}`)
		.setColor(0xb000ff) 
		await message.channel.send(embed);
	},
};