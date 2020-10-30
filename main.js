delete require.cache;
const Discord = require('discord.js');
const fs = require('fs');
const { normalize } = require('path');
const client = new Discord.Client
delete client.commands
client.commands = new Discord.Collection();
const ytdl = require('ytdl-core');
const channelTypes = {
	dm: 'DM',
	group: 'Group DM',
	text: 'Text Channel',
	voice: 'Voice Channel',
	category: 'Category',
	unknown: 'Unknown'
}
function load() {
	let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	delete require.cache;
	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	}
}
load()
function getUptime() {
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
}
function getPrefix(message) {
	let p = "~"
	var data = fs.readFileSync("data.json");
	const json = JSON.parse(data); 
	if (json.prefixes[String(message.guild.id)]) {
		p = json.prefixes[String(message.guild.id)]
	}
	return p
}
//  _____   _    _   __     __   __     __   _   ______    ______   _______ 
// |  _  \ | |  | | |  \   /  | |  \   /  | |_| |  __  \  /  __  \ |__   __|
// | | | | | |  | | | | \_/ | | | | \_/ | |  _  | |__|  | | |  | |    | |   
// | | | | | |  | | | |\___/| | | |\___/| | | | |  __  /  | |  | |    | |   
// | | | | | |  | | | |     | | | |     | | | | | |  \  \ | |  | |    | |   
// | |_| | | |__| | | |     | | | |     | | | | | |__/  / | |__| |    | |    
// |_____/ \______/ |_|     |_| |_|     |_| |_| |______/  \______/    |_|   

var voices = new Map();
function capitalize(name) {
	name = name.toLowerCase();
	return name.charAt(0).toUpperCase() + name.slice(1)
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function getUptime() {
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
}

function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
}



client.on('ready', async message => {
	console.log(`Logged in as ${client.user.tag}, in ${client.guilds.cache.array().length} servers`)
	const channel = client.channels.cache.get('770356118710517791'); 
	messages = await channel.messages.fetch()
	messages.forEach(async e => {
		await e.delete()
	})
	var embed = new Discord.MessageEmbed()
	.setDescription(`**<@${client.user.id}> is online!**`)
	.addField(`Servers it signed in to:`, `${client.guilds.cache.array().length}`, true)
	.setColor(0xb000ff)
	.setImage('https://media1.tenor.com/images/7dd18147740f05e106d30b35a24f6ffc/tenor.gif?itemid=11063213')
	await channel.send(embed).catch(e => console.log(e));
		
	uptime = getUptime().noSecUptime;
	
	let m = await channel.send(`<@${771779575570628609}> Currently been online for ${uptime} since my last restart\n\nIf you don't see this message update every minute it means I'm offline!`).catch(e => console.log(e));
	setInterval(async function(){
		uptime = getUptime().noSecUptime;
		await m.edit(`Currently been online for ${uptime} since my last restart. \n\nIf you don't see this message update every minute it means I'm offline!`);
	}, 60000)
	client.user.setPresence({ activity: { type: "WATCHING", name: `${client.guilds.cache.size} servers, run ~help for help` }})
	setInterval(async function(){
		client.user.setPresence({ activity: { type: "WATCHING", name: `${client.guilds.cache.size} servers, run ~help for help` }})
	}, 60000)
	const suggestionsChannel = client.channels.cache.get('770992516186374174')
	let suggestions = await suggestionsChannel.messages.fetch()
	suggestions = suggestions.array()
	suggestions.forEach(e => {
		if (e.content.startsWith('=>')) return;
		e.react('\u2705')
		e.react('\u274c')
	})
})

client.on('message', async message => {
	if (message.author.bot) return;
	if (message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)) {
		let embed = new Discord.MessageEmbed()
			.setTitle('This servers prefix:')
			.setDescription(`${getPrefix(message)}`)
			.setColor(0xb000ff)
		await message.channel.send(embed)
	}
	if (message.author.bot) return;
	if (client.channels.cache.get('770992516186374174') === message.channel) {
		if (message.content.startsWith('=>')) return;
		message.react('\u2705')
		message.react('\u274c')
		return;
	} 
	if (Math.random() < 0.1){ 
		number = 5;
		message.react(message.guild.emojis.cache.get(message.guild.emojis.cache.randomKey()));
	}
	
	if(!message.content.startsWith(getPrefix(message)) || message.author.bot) return;
	let args = message.content.replace(getPrefix(message), "").split(/ +/);
	const command = args.shift().toLowerCase();
	if (command == "") return;
	if (command == "load") {	
		if (message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129) {
			load()
			return await message.reply("reloaded!")
		}
		else {
			return await message.reply("lol no")
		}
	}
	if (!client.commands.has(command)) {
		let m = await message.channel.send(`<@${message.author.id}> I'm not quite sure about that command.... Check if you didn't misspell it with \`~commands\` or join the support server to suggest this as an idea!`)
		await sleep(60000)
		await m.delete()
		return
	};
	if (client.commands.get(command).check !== undefined) {
		if (client.commands.get(command).check(message) === false) {
			return await message.reply("you do not have permission to run this command!")
		} 
	}
	client.commands.get(command).execute(message, args).catch(async e => {
		let m = await message.reply('there was an error trying to execute that command! please join the support server with the `~link` command\n```DummiBot just received a big update, one of them being, every command having their own file instead of one big one. Keep in mind that all functions still need to get added. If you see this messsage it means this function hasn\'t been added yet\n\nThese errors do get reported in the support server! So they will get fixed!```');
		client.channels.cache.get("770688583848689714").send(`\`\`\`js\n${e.stack}\`\`\``)
		await sleep(60000)
		await m.delete()
		return
	})
	
});

process.on("unhandledRejection", async (e) => {
	client.channels.cache.get("770688583848689714").send(`\`\`\`js\n${e.stack}\`\`\``)
})
const token = fs.readFileSync("token.txt")
client.login(token);