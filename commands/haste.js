const got = require("got")
const fs = require("fs")
module.exports = {
	name: 'haste',
	description: 'Uploads code to hastebin',
	check(message) {
		return message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129
	},
	async execute(message, args) {
		try {
			d = fs.readFileSync(args.join(" "))
		}
		catch {
			return await message.reply("Not a valid file path")
		}
		try {
			const {body} = await got.post('https://hastebin.com/documents', {
				body: d
			});
			message.channel.send(`https://hastebin.com/${JSON.parse(body).key}.js`);
		} catch (error) {
			message.channel.send(error.response.body);
		}
	}
}