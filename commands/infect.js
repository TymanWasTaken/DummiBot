function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
Discord = require("discord.js")
        module.exports = {
            name: 'infect',
            description: 'infect someone',
            async execute(message, args) {
                if (message.mentions.users.array([0])[0] === message.client.user) return message.channel.send("I'm the virus... you really think I can infect myself?")
		if (args[0] === undefined) return message.channel.send("You must specify a user")
        var m = await message.channel.send(`<@${message.author.id}> do you want to infect ${args[0]}?`)
                await m.react(message.client.emojis.cache.get('726935952584605737'))
                const filter = (reaction, user) => reaction.emoji.id == 726935952584605737 && user.id == message.author.id
                m.awaitReactions(filter, { max: 1 })
                      .then(async collected => {
                        await m.edit(`Virus uploading...    \n(....................) 0%   `)
                        await sleep(750)
                        await m.edit(`Virus uploading.      \n(:...................) 5%   `)
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(::..................) 10%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(:::.................) 15%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading.      \n(::::................) 20%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(:::::...............) 25%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(::::::..............) 30%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading.      \n(:::::::.............) 35%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(::::::::............) 40%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(:::::::::...........) 45%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading.      \n(::::::::::..........) 50%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(:::::::::::.........) 55%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(::::::::::::........) 60%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(:::::::::::::.......) 65%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(::::::::::::::......) 70%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading.      \n(:::::::::::::::.....) 75%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(::::::::::::::::....) 80%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(:::::::::::::::::...) 85%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading.      \n(::::::::::::::::::..) 90%  `) 
                        await sleep(750)
                        await m.edit(`Virus uploading..     \n(:::::::::::::::::::.) 95%  `)
                        await sleep(750)
                        await m.edit(`Virus uploading...    \n(::::::::::::::::::::) 100% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nInitiating download...`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(....................) 0%  `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.. \n(:...................) 5%  `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(::..................) 10% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(:::.................) 15% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.. \n(::::................) 20% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(:::::...............) 25% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(::::::..............) 30% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.. \n(:::::::.............) 35% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(::::::::............) 40% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(:::::::::...........) 45% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(::::::::::..........) 50% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(:::::::::::.........) 55% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.. \n(::::::::::::........) 60% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(:::::::::::::.......) 65% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(::::::::::::::......) 70% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.. \n(:::::::::::::::.....) 75% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(::::::::::::::::....) 80% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(:::::::::::::::::...) 85% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.. \n(::::::::::::::::::..) 90% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading...\n(:::::::::::::::::::.) 95% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading.  \n(::::::::::::::::::::) 100% `)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInitiating install...`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(..................) 0%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.. \n(:.................) 5%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling...\n(::................) 10%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(:::...............) 15%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.. \n(::::..............) 20%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling...\n(:::::.............) 25%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(::::::............) 30%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.. \n(:::::::...........) 35%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling...\n(::::::::..........) 40%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(:::::::::.........) 55%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.. \n(::::::::::........) 60%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling...\n(:::::::::::.......) 65%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(::::::::::::......) 70%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.. \n(:::::::::::::.....) 75%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling...\n(::::::::::::::....) 80%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(:::::::::::::::...) 85%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.. \n(::::::::::::::::..) 90%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling...\n(:::::::::::::::::.) 95%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nInstalling.  \n(::::::::::::::::::) 100%`)
                        await sleep(750)
                        await m.edit(`Virus upload done! \n(::::::::::::::::::::) 100% \nDownloading done!\n(::::::::::::::::::::) 100% \nVirus installed! \n(::::::::::::::::::) 100% \n${args[0]} you got your discord infected by <@${message.author.id}>! Now that your discord got infected pay me to get it removed!`)
                    })
                      .catch(console.error);
                },
            };