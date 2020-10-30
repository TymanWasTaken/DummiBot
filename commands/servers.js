Discord = require("discord.js")
module.exports = {
	name: 'yeet',
	description: 'yeet args',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
        .setTitle('All Wolves Of Mars servers:')
        .setDescription('Wolves Of Mars Lounge: https://discord.gg/AJxtuxg \nWolves Of Mars Destiny: https://discord.gg/GKVjnng \nWolves Of Mars Call Of Duty: https://discord.gg/afVaAwx \nWolves Of Mars Test Server: https://discord.gg/fXfPgwT \nWolves Of Mars Template: https://discord.gg/cAbnxxq')
        .setColor(0xb000ff)
        await message.channel.send(embed);
    },
};