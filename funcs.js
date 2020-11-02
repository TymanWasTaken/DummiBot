const fs = require("fs")
module.exports = {
    getUptime() {
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
    },
    getPrefix(message) {
        let p = "~"
        var data = fs.readFileSync("data.json");
        const json = JSON.parse(data); 
        if (json.prefixes[String(message.guild.id)]) {
            p = json.prefixes[String(message.guild.id)]
        }
        return p
    },
    capitalize(name) {
        name = name.toLowerCase();
        return name.charAt(0).toUpperCase() + name.slice(1)
    },
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    },
    getReations(message) {
        var data = fs.readFileSync("data.json");
        const json = JSON.parse(data); 
        if (json.noReactions.includes(message.guild.id)) {
            return false
        }
        return true
    },
    // const {paginate} = require("../funcs.js")
    async paginate(message, embeds) {
        let curPage = 0;
        if ((typeof embeds) !== "object") return
        const m = await message.channel.send(embeds[curPage].setFooter(`Page ${curPage+1}/${embeds.length}`))
        m.react("⏪")
        m.react("◀")
        m.react("⏹")
        m.react("▶")
        m.react("⏩")
        m.react("🔢")
        const filter = (r, u) => ["⏪", "◀", "⏹", "▶", "⏩", "🔢"].includes(r.emoji.toString())
        coll = m.createReactionCollector(filter)
        let timeout = setTimeout(async () => {
            await m.edit("Timed out.", {embed: null})
            try {
                await m.reactions.removeAll()
            }
            catch {}
            coll.stop()
        }, 300000)
        coll.on("collect", async (r, u) => {
            if (u.id == message.client.user.id) return
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(u.id));
            for (const reaction of userReactions.values()) {
                try {
                    await reaction.users.remove(u.id);
                }
                catch {}
            }
            if (u.id != message.author.id) return
            clearTimeout(timeout)
            timeout = setTimeout(async () => {
                await m.edit("Timed out.", {embed: null})
                try {
                    await m.reactions.removeAll()
                }
                catch {}
                coll.stop()
            }, 300000)
            if (r.emoji.toString() == "◀") {
                if (curPage - 1 < 0) return
                if (!embeds[curPage - 1]) return
                curPage--
                await m.edit(embeds[curPage].setFooter(`Page ${curPage+1}/${embeds.length}`))
            }
            else if (r.emoji.toString() == "▶") {
                if (!embeds[curPage + 1]) return
                curPage++
                m.edit(embeds[curPage].setFooter(`Page ${curPage+1}/${embeds.length}`))
            }
            else if (r.emoji.toString() == "⏹") {
                clearTimeout(timeout)
                await m.edit("Canceled by user.", {embed: null})
                try {
                    await m.reactions.removeAll()
                }
                catch {}
                coll.stop()
            }
            else if (r.emoji.toString() == "⏪") {
                curPage = 0
                await m.edit(embeds[curPage].setFooter(`Page ${curPage+1}/${embeds.length}`))
            }
            else if (r.emoji.toString() == "⏩") {
                curPage = embeds.length - 1
                await m.edit(embeds[curPage].setFooter(`Page ${curPage+1}/${embeds.length}`))
            }
            else if (r.emoji.toString() == "🔢") {
                const filter = m => m.author.id == message.author.id && !(isNaN(Number(m.content)))
                const m1 = await message.reply("What page would you like to see? (Must be a number)")
                message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time']})
                .then(async messages => {
                    let resp = messages.array()[0]
                    resp = Number(resp.content)
                    const embedChange = embeds[resp - 1] || null
                    if (embedChange === null) {
                        const mErr = await message.channel.send("Invalid page.")
                        try {
                            await messages.array()[0].delete()
                        }
                        catch {}
                        setTimeout(async () => {
                            await mErr.delete()
                            await m1.delete()
                        }, 10000);
                        return
                    };
                    curPage = resp - 1
                    await m.edit(embedChange.setFooter(`Page ${curPage+1}/${embeds.length}`))
                    try {
                        await messages.array()[0].delete()
                    }
                    catch {}
                    await m1.delete()
                })
                .catch(async messages => {
                    const mErr = await message.channel.send(`Took too long.`)
                    setTimeout(async () => {
                        await mErr.delete()
                        await m1.delete()
                    }, 10000);
                });
            }
        })
    },
    //const {randColor} = require("../funcs.js")
    randColor() {
        var letters = '0123456789ABCDEF';
        var color = '';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        return eval(`0x${color}`)
    }
};