const {randColor} = require("../funcs.js")
const { DiscordAPIError } = require("discord.js")
const fs = require("fs")
module.exports = {
	name: 'setup',
	category: 'admin',
	description: 'Set up basic settings of this server.',
	check(message) {
		return message.member.hasPermission("MANAGE_GUILD")
	},
	async execute(message, args) {
        function setPrefix(prefix, message) {
			let data = fs.readFileSync("data.json")
			let json = JSON.parse(data)
			json.prefixes[message.guild.id] = prefix
            fs.writeFileSync("data.json", JSON.stringify(json))
        }
        let embed0 = new Discord.MessageEmbed()
        .setTitle("Prefix")
        .setDescription("Would you like to change the prefix? If so, send it here. If not, say `skip`.")
        .setColor(randColor) 
        await message.channel.send(embed0)
        const collector = message.channel.createMessageCollector(m => m.author.id == message.author.id && m.channel.id == message.channel.id)
        let stage = 1;
        collector.on('collect', async m => {
            if (stage == 1) {
                if (m.content !== "skip") {
                    setPrefix(m.content, m)
                    let embed1 = new Discord.MessageEmbed() 
                    .setTitle("Prefix")
                    .setDescription(`Prefix changed to \`${m.content}\`.\nYou can always change the prefix with ~setprefix.`)
                    .setColor(randColor()) 
                    await message.channel.send(embed1)
                    stage++
                    let embed2 = new Discord.MessageEmbed()
                    .setTitle("Bot name")
                    .setDescription(`Would you like to change the bot name? If so, send it here. If not, say \`skip\``) 
                    .setColor(randColor()) 
                    await message.channel.send(embed2)
                    return
                }
                else {
                    stage++
                    let embed1 = new Discord.MessageEmbed()
                    .setTitle("Bot name")
                    .setDescription(`Would you like to change the bot name? If so, send it here. If not, say \`skip\``) 
                    .setColor(randColor()) 
                    await message.channel.send(embed1)
                    return
                }
            }
            else if (stage == 2) {
                if (m.content !== "skip") {
                    if (m.content.split("").length > 32) {
                    let embed = new Discord.MessageEmbed()
                        .setColor(randColor())
                        .setTitle('Invalid argument')
                        .setDescription('Username must be 32 characters or less.')
                    return await message.channel.send(embed)
                    }
                    await m.guild.me.setNickname(m.content)
                    let embed1 = new Discord.MessageEmbed()
                    .setTitle("Bot name")
                    .setDescription(`Nickname changed to \`${m.content}\``) 
                    .setColor(randColor()) 
                    await message.channel.send(embed1)
                    stage++
                    let embed2 = new Discord.MessageEmbed()
                    .setTitle("Setup complete!")
                    .setColor(randColor()) 
                    await message.channel.send(embed2)
                    collector.stop()
                    return
                }
                else {
                    let embed2 = new Discord.MessageEmbed()
                    .setTitle("Setup complete!")
                    .setColor(randColor()) 
                    await message.channel.send(embed2)
                    collector.stop()
                    return
                }                
            }
        }); 
    }
} 