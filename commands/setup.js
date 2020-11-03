const {randColor} = require("../funcs.js")
const { DiscordAPIError } = require("discord.js")
const fs = require("fs")
const { send } = require("process")
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
        .setColor(randColor()) 
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
                    .setTitle("Random reactions")
                    .setDescription("Would you like the bot to have a small chance to react with an emoji (from your server) to messages?")
                    .setColor(randColor()) 
                    const react = await message.channel.send(embed2)
                    react.react("✅")
                    react.react("❌")
                    react.awaitReactions((r, u)=> ["✅", "❌"].includes(r.emoji.toString()) && u.id == m.author.id, { max: 1, time: 60000, errors: ['time']})
                    .then(async (r)  => {
                        r = r.first()
                        const userReactions = react.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                        for (const reaction of userReactions.values()) {
                            try {
                                await reaction.users.remove(message.author.id);
                            }
                            catch {}
                        }
                        if (r.emoji.toString() == "✅") {
                            let data = fs.readFileSync("data.json").toString()
                            data = JSON.parse(data)
                            if (!data.reactions.includes(m.guild.id)) {
                                data.reactions.push(m.guild.id)
                                fs.writeFileSync("data.json", JSON.stringify(data))
                            }
                            let embed3 = new Discord.MessageEmbed()
                                .setTitle('Random emotes enabled.')
                                .setColor(randColor())
                                await message.channel.send(embed3)
                        }
                        else if (r.emoji.toString() == "❌") {
                            let data = fs.readFileSync("data.json").toString()
                            data = JSON.parse(data)
                            if (data.reactions.includes(m.guild.id)) {
                                delete data.reactions[data.reactions.indexOf(m.guild.id)]
                                fs.writeFileSync("data.json", JSON.stringify(data))
                            }
                            let embed4 = new Discord.MessageEmbed()
                                .setTitle('Random emotes disabled.')
                                .setColor(randColor())
                                await message.channel.send(embed4)
                        }
                    })
                    .catch((e) => {
                        m.channel.send("Timed out, skipping.")
                    })
                    collector.stop()
                    return
                }
                else {
                    stage++
                    let embed2 = new Discord.MessageEmbed()
                    .setTitle("Random reactions")
                    .setDescription("Would you like the bot to have a small chance to react with an emoji (from your server) to messages?")
                    .setColor(randColor()) 
                    const react = await message.channel.send(embed2)
                    react.react("✅")
                    react.react("❌")
                    react.awaitReactions((r, u)=> ["✅", "❌"].includes(r.emoji.toString()) && u.id == m.author.id, { max: 1, time: 60000, errors: ['time']})
                    .then(async (r)  => {
                        r = r.first()
                        const userReactions = react.reactions.cache.filter(reaction => reaction.users.cache.has(message.author.id));
                        for (const reaction of userReactions.values()) {
                            try {
                                await reaction.users.remove(message.author.id);
                            }
                            catch {}
                        }
                        if (r.emoji.toString() == "✅") {
                            let data = fs.readFileSync("data.json").toString()
                            data = JSON.parse(data)
                            if (!data.reactions.includes(m.guild.id)) {
                                data.reactions.push(m.guild.id)
                                fs.writeFileSync("data.json", JSON.stringify(data))
                            }
                            let embed3 = new Discord.MessageEmbed()
                                .setTitle('Random emotes enabled.')
                                .setColor(randColor())
                                await message.channel.send(embed3)
                        }
                        else if (r.emoji.toString() == "❌") {
                            let data = fs.readFileSync("data.json").toString()
                            data = JSON.parse(data)
                            if (data.reactions.includes(m.guild.id)) {
                                delete data.reactions[data.reactions.indexOf(m.guild.id)]
                                fs.writeFileSync("data.json", JSON.stringify(data))
                            }
                            let embed4 = new Discord.MessageEmbed()
                                .setTitle('Random emotes disabled.')
                                .setColor(randColor())
                                await message.channel.send(embed4)
                        }
                    })
                    .catch((e) => {
                        m.channel.send("Timed out, skipping.")
                    })
                    collector.stop()
                    return
                }                
            }
        }); 
    }
} 