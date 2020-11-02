const { DMChannel } = require("discord.js");

Discord = require("discord.js")
module.exports = {
	name: 'mute',
	category: 'moderation',
	description: 'Mute someone, the time in minutes',
	check(message) {
		return message.member.hasPermission("MANAGE_MESSAGES")
	},
	async execute(message, args) {
		let tomute = message.mentions.members.first();
		if(!tomute) return message.reply("Couldn't find user.");
		if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("You can't mute me.")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
		let muterole = message.guild.roles.cache.find(e => e.name.toLowerCase() == "muted");
		if(!muterole){
			try{
				muterole = await message.guild.createRole({
					name: "Muted",
					color: "#000000",
					permissions:[]
				})
				message.guild.channels.forEach(async (channel, id) => {
					await channel.overwritePermissions(muterole, {
						SEND_MESSAGES: false,
						ADD_REACTIONS: false
					});
				});
			}catch(e){
				console.log(e.stack);
			}
		}
		let mutetime = Number(args[1])*1000*60;
		if(!mutetime) return message.reply("You didn't specify a time!");
		await tomute.roles.add(muterole)
		message.channel.send(`<@${tomute.id}> has been muted for ${args[1]} minutes`);
		setTimeout(function(){
			tomute.roles.remove(muterole)
			message.author.send(`<@${tomute.id}> has been unmuted!`);
		}, mutetime);
	},
	
};