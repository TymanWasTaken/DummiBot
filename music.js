const { BroadcastDispatcher } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require('yt-search');
const songInfo = await ytdl.getInfo(args[1]);
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader");

let YOUTUBE_API_KEY, SOUNDCLOUD_CLIENT_ID, MAX_PLAYLIST_SIZE;
try {
  const config = require("../config.json");
  YOUTUBE_API_KEY = config.YOUTUBE_API_KEY;
  SOUNDCLOUD_CLIENT_ID = config.SOUNDCLOUD_CLIENT_ID;
  MAX_PLAYLIST_SIZE = config.MAX_PLAYLIST_SIZE;
} catch (error) {
  YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  SOUNDCLOUD_CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
  MAX_PLAYLIST_SIZE = process.env.MAX_PLAYLIST_SIZE;
}
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
}
const {randColor} = require("./funcs.js")
Discord = require("discord.js")
module.exports = {
	name: 'music',
	category: 'music',
    description: 'Create a music channel for DummiBot',
    async execute(message, args) {
        await message.channel.send('Queue:')
        let embed = new Discord.MessageEmbed()
        .setAuthor("I'm currently playing:", message.client.user.displayAvatarURL())
        .setDescription(`${args[0]}`)
        .setImage('https://images.discordapp.net/avatars/482513687417061376/7901b2a48e2bdea38fd2de3f6de2188c.png?size=512 ')
        .setColor(randColor())
        .setFooter('Queue: (queue.size) | volume (volume percentage)')
        const m = await message.channel.send(embed)
        await message.channel.send('legend: \n⏯: play/pause \n⏩: skip current song\n⏹: stop and clear Queue\n🔀: shuffle \n🔄: loop \n🔢: choose song\n🔼: volume up\n🔽: volume down\n☑: save to your playlist\n❎: remove from your playlist')
        m.react("⏯")
        m.react("⏩")
        m.react("⏹")
        m.react("🔀")
        m.react("🔄")
        m.react("🔢")
        m.react("🔼")
        m.react("🔽")
        m.react("☑")
        m.react("❎")
        const filter = (r, u) => ["⏯", "⏩", "⏹", "🔀", "🔄", "🔢", "☑", "❎"].includes(r.emoji.toString())

if (!message.member.voice.channel) {
    return message.reply("You are not in a voice channel!")
}
//⏪◀⏹▶⏩🔢🔄⏯🔀☑❎🔼🔽
const { channel } = message.member.voice;

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error);
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(`You must be in the same channel as ${message.client.user}`).catch(console.error);

    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}play <YouTube URL | Video Name | Soundcloud URL>`)
        .catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.reply("Cannot connect to voice channel, missing permissions");
    if (!permissions.has("SPEAK"))
      return message.reply("I cannot speak in this voice channel, make sure I have the proper permissions!");

    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
    const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
    const url = args[0];
    const urlValid = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.client.commands.get("playlist").execute(message, args);
    } else if (scdl.isValidUrl(url) && url.includes("/sets/")) {
      return message.client.commands.get("playlist").execute(message, args);
    }

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songInfo = null;
    let song = null;

    if (urlValid) {
      try {
        songInfo = await ytdl.getInfo(url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    } else if (scRegex.test(url)) {
      try {
        const trackInfo = await scdl.getInfo(url, SOUNDCLOUD_CLIENT_ID);
        song = {
          title: trackInfo.title,
          url: trackInfo.permalink_url,
          duration: Math.ceil(trackInfo.duration / 1000)
        };
      } catch (error) {
        if (error.statusCode === 404)
          return message.reply("Could not find that Soundcloud track.").catch(console.error);
        return message.reply("There was an error playing that Soundcloud track.").catch(console.error);
      }
    } else {
      try {
        const results = await youtube.searchVideos(search, 1);
        songInfo = await ytdl.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply("No video was found with a matching title").catch(console.error);
      }
    }

    if (serverQueue) {
      serverQueue.songs.push(song);
      return serverQueue.textChannel
        .send(`✅ **${song.title}** has been added to the queue by ${message.author}`)
        .catch(console.error);
    }

    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);

    try {
      queueConstruct.connection = await channel.join();
      await queueConstruct.connection.voice.setSelfDeaf(true);
      play(queueConstruct.songs[0], message);
    } catch (error) {
      console.error(error);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(`Could not join the channel: ${error}`).catch(console.error);
      var dispatcher;   
    if (r.emoji.toString() == "⏯") {
                const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ paused the music.`).catch(console.error);
      const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ resumed the music!`).catch(console.error);
    }

    return message.reply("The queue is not paused.").catch(console.error);

            else if (r.emoji.toString() == "⏩") {
                function skip(message, serverQueue) {
                    if (!message.member.voice.channel)
                     return message.channel.send(
                      'You have to be in a voice channel to stop the music!'
                     );
                    if (!serverQueue)
                     return message.channel.send('There is no song that I could skip!');
                    serverQueue.connection.dispatcher.end();
                   }
                if(playlist.length === 0) {
            }
            else if (r.emoji.toString() == "⏹") {
                const queue = message.client.queue.get(message.guild.id);

                if (!queue) return message.reply("There is nothing playing.").catch(console.error);
                if (!canModifyQueue(message.member)) return;

                queue.songs = [];
                queue.connection.dispatcher.end();
                queue.textChannel.send(`${message.author} ⏹ stopped the music!`).catch(console.error);
            }
            else if (r.emoji.toString() == "🔀") {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) return message.channel.send("There is no queue.").catch(console.error);
                if (!canModifyQueue(message.member)) return;

                let songs = queue.songs;
                for (let i = songs.length - 1; i > 1; i--) {
                  let j = 1 + Math.floor(Math.random() * i);
                  [songs[i], songs[j]] = [songs[j], songs[i]];
                }
                queue.songs = songs;
                message.client.queue.set(message.guild.id, queue);
                queue.textChannel.send(`${message.author} 🔀 shuffled the queue`).catch(console.error);    
            }
            else if (r.emoji.toString() == "🔄") {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) return message.reply("There is nothing playing.").catch(console.error);
                if (!canModifyQueue(message.member)) return;
            
                queue.loop = !queue.loop;
                return queue.textChannel
                  .send(`Loop is now ${queue.loop ? "**on**" : "**off**"}`)
                  .catch(console.error);
            }
            else if (r.emoji.toString() == "🔢") {
                if (!args.length)
      return message.reply(`Usage: ${message.client.prefix}${module.exports.name} <Video Name>`).catch(console.error);
    if (message.channel.activeCollector)
      return message.reply("A message collector is already active in this channel.");
    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").catch(console.error);

    const search = args.join(" ");

    let resultsEmbed = new MessageEmbed()
      .setTitle(`**Reply with the song number you want to play**`)
      .setDescription(`Results for: ${search}`)
      .setColor("#F8AA2A");

    try {
      const results = await youtube.searchVideos(search, 10);
      results.map((video, index) => resultsEmbed.addField(video.shortURL, `${index + 1}. ${video.title}`));

      var resultsMessage = await message.channel.send(resultsEmbed);

      function filter(msg) {
        const pattern = /(^[1-9][0-9]{0,1}$)/g;
        return pattern.test(msg.content) && parseInt(msg.content.match(pattern)[0]) <= 10;
      }

      message.channel.activeCollector = true;
      const response = await message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] });
      const choice = resultsEmbed.fields[parseInt(response.first()) - 1].name;

      message.channel.activeCollector = false;
      message.client.commands.get("play").execute(message, [choice]);
      resultsMessage.delete().catch(console.error);
    } catch (error) {
      console.error(error);
      message.channel.activeCollector = false;
            }
            else if (r.emoji.toString() == "🔼") {
                const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("You need to join a voice channel first!").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Volume set to: **${args[0]}%**`).catch(console.error);
            }
            else if (r.emoji.toString() == "🔽") {
                volume down
            }
            else if (r.emoji.toString() == "☑") {
                async execute(message, args) {
                    const { PRUNING } = require("../config.json");
                    const { channel } = message.member.voice;
                
                    const serverQueue = message.client.queue.get(message.guild.id);
                    if (serverQueue && channel !== message.guild.me.voice.channel)
                      return message.reply(`You must be in the same channel as ${message.client.user}`).catch(console.error);
                
                    if (!args.length)
                      return message
                        .reply(`Usage: ${message.client.prefix}playlist <YouTube Playlist URL | Playlist Name>`)
                        .catch(console.error);
                    if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error);
                
                    const permissions = channel.permissionsFor(message.client.user);
                    if (!permissions.has("CONNECT"))
                      return message.reply("Cannot connect to voice channel, missing permissions");
                    if (!permissions.has("SPEAK"))
                      return message.reply("I cannot speak in this voice channel, make sure I have the proper permissions!");
                
                    const search = args.join(" ");
                    const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
                    const url = args[0];
                    const urlValid = pattern.test(args[0]);
                
                    const queueConstruct = {
                      textChannel: message.channel,
                      channel,
                      connection: null,
                      songs: [],
                      loop: false,
                      volume: 100,
                      playing: true
                    };
                
                    let song = null;
                    let playlist = null;
                    let videos = [];
                
                    if (urlValid) {
                      try {
                        playlist = await youtube.getPlaylist(url, { part: "snippet" });
                        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
                      } catch (error) {
                        console.error(error);
                        return message.reply("Playlist not found :(").catch(console.error);
                      }
                    } else if (scdl.isValidUrl(args[0])) {
                      if (args[0].includes("/sets/")) {
                        message.channel.send("⌛ fetching the playlist...");
                        playlist = await scdl.getSetInfo(args[0], SOUNDCLOUD_CLIENT_ID);
                        videos = playlist.tracks.map((track) => ({
                          title: track.title,
                          url: track.permalink_url,
                          duration: track.duration / 1000
                        }));
                      }
                    } else {
                      try {
                        const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
                        playlist = results[0];
                        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
                      } catch (error) {
                        console.error(error);
                        return message.reply("Playlist not found :(").catch(console.error);
                      }
                    }
                
                    videos.forEach((video) => {
                      song = {
                        title: video.title,
                        url: video.url,
                        duration: video.durationSeconds
                      };
                
                      if (serverQueue) {
                        serverQueue.songs.push(song);
                        if (!PRUNING)
                          message.channel
                            .send(`✅ **${song.title}** has been added to the queue by ${message.author}`)
                            .catch(console.error);
                      } else {
                        queueConstruct.songs.push(song);
                      }
                    });
                
                    if (!PRUNING) {
                      playlistEmbed.setDescription(queueConstruct.songs.map((song, index) => `${index + 1}. ${song.title}`));
                      if (playlistEmbed.description.length >= 2048)
                        playlistEmbed.description =
                          playlistEmbed.description.substr(0, 2007) + "\nPlaylist larger than character limit...";
                    }
                
                    message.channel.send(`${message.author} Started a playlist`, playlistEmbed);
                
                    if (!serverQueue) message.client.queue.set(message.guild.id, queueConstruct);
                
                    if (!serverQueue) {
                      try {
                        queueConstruct.connection = await channel.join();
                        await queueConstruct.connection.voice.setSelfDeaf(true);
                        play(queueConstruct.songs[0], message);
                      } catch (error) {
                        console.error(error);
                        message.client.queue.delete(message.guild.id);
                        await channel.leave();
                        return message.channel.send(`Could not join the channel: ${error}`).catch(console.error);
                      }
            }
            else if (r.emoji.toString() == "❎") {
                remove from playlist
            }
        },	
};