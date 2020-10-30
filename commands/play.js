module.exports = {
    name: 'play',
    description: 'music',
    async execute(message, args) {
        if (!message.member.voice.channel) {
            return message.reply("You are not in a voice channel!")
        }
        var connection = await message.member.voice.channel.join();
        var dispatcher;
        if (!validURL(args[0])) {
            await message.guild.me.voice.channel.leave()
            return message.reply('Please use a valid url.');
        }
        try {
            dispatcher = connection.play(ytdl(args[0], { filter: 'audioonly' }));
        }
        catch (e) {
            if (String(e) === "Error: Not a YouTube domain") {
                dispatcher = connection.play(args[0]);
            }
            else {
                await message.guild.me.voice.channel.leave()
                return await message.reply("Error playing url, is it a valid audio source?")
            }
        }
    },
};