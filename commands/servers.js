const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
    name: 'servers',
    category: 'support',
	description: 'Get a list of servers made or customized by The__Dummi.',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
        .setTitle('All status servers of Dummi')
        .addField('Owned and created by Dummi', '[Wolves Of Mars Lounge](https://discord.gg/AJxtuxg) \n[Wolves Of Mars Destiny](https://discord.gg/GKVjnng) \n[Wolves Of Mars Call Of Duty](https://discord.gg/afVaAwx)\n[Wolves Of Mars Test Server](https://discord.gg/fXfPgwT)\n[Wolves Of Mars Template](https://discord.gg/cAbnxxq)', true)
        .addField('Costomized by Dummi', '[WeedyBong](https://discord.gg/GEBEr4g) Destiny 18+\n[SunBro](https://discord.gg/r9hTzhU) Dark souls')
        .addField('Admin status', '[Crimxson\'s Hideout](https://discord.gg/A5RxF2Z) community\n[Soul Society](https://discord.gg/kY4QmWa) gaming\n[꒰NoPartyVibes│内向的꒱](https://discord.gg/pP6qhKMBFn) community')
        .addField('Moderator status','[DDS//YourApps](https://discord.gg/T9u3Qcm) support server')
        .setColor(randColor())
        await message.channel.send(embed);
    },
};