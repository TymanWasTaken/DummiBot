const getReactions = require("../funcs.js").getReations
const getPrefix = require("../funcs.js").getPrefix

const {randColor} = require("../funcs.js")
function capitalize(name) {
    name = name.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1)
}
Discord = require("discord.js")
module.exports = {
    name: 'settings',
    category: 'info',
    description: 'Get server settings of this bot',
    async execute(message, args) {
        let bots = 0;
        for (var i = 0; i < message.guild.members.cache.array().length; i++) {
            if (message.guild.members.cache.array()[i].user.bot) bots++
        }
        let permissions = [];
		for (var i = 0; i < message.guild.me.permissions.toArray().length; i++) {
			permissions.push("`" + capitalize(message.guild.me.permissions.toArray()[i].replace(/_/g, " ")) + "`");
		}
        var embed = new Discord.MessageEmbed()
        .setColor(randColor())    
        .setTitle('Bot settings')
        .setThumbnail(message.guild.iconURL())
        .addField('| Server name', message.guild.name, true)
        .addField('| This server\'s prefix', `\`${getPrefix(message)}\``, true)
        .addField('| Random reactions', getReactions(message) ? 'Enabled' : 'Disabled', true ) 
        // .addField('| Moderation role(s)', , true)
        // .addField('| Administrator role(s)', , true )
        // .addField('| Enabled modules', , true)
        // .addField('| Disabled modules', , true)
        .addField('| Bot nickname', message.guild.me.nickname || "DummiBot", true)
        .addField(`| Date bot joined`, message.member.joinedAt, true)
        .addField('| Bot permissions', permissions, true)
        await message.channel.send(embed);
    },
};