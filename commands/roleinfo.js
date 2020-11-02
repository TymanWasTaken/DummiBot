const {randColor} = require("../funcs.js")
function capitalize(name) {
	name = name.toLowerCase();
	return name.charAt(0).toUpperCase() + name.slice(1)
}
Discord = require("discord.js")
module.exports = {
	name: 'roleinfo',
	category: 'info',
	description: 'Get info general about mentioned role.',
	async execute(message, args) {
const role = message.mentions.roles.first();
			
			if (!role) {
				return message.reply('please enter a valid role.');
			}
			var permissions = [];
			for (var i = 0; i < role.permissions.toArray().length; i++) {
				permissions.push("`" + capitalize(role.permissions.toArray()[i].replace(/_/g, " ")) + "`");
			}
			var embed = new Discord.MessageEmbed()
			.setColor(randColor())
			.setThumbnail(message.guild.iconURL())
			.setTitle('Role Info')
			.addField('| Name', role.name, true)
			.addField('| ID', role.id, true)
			.addField('| Creation Date', role.createdAt.toDateString(), true)
			.addField('| Hoisted', role.hoist ? 'Yes' : 'No', true)
			.addField('| Mentionable', role.mentionable ? 'Yes' : 'No', true)
			.addField('| Permissions', permissions.join('\n') || 'None');
            message.channel.send(embed);
        },
    };