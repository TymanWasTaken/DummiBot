module.exports = {
	name: 'eval',
	category: 'bot maker',
	description: 'Runs JavaScript code',
	check(message) {
		return message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129
	},
	async execute(message, args) {
		const clean = text => {
			if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			else
			return text;
		}
		if (args[0] === "sh") {
			const { exec } = require("child_process");
			let m = await message.channel.send(`Running shell command \`${message.content.replace("~eval sh ", "")}\``)
			exec(message.content.replace("~eval sh ", ""), (error, stdout, stderr) => {
				if (clean(stdout) == "") {
					m.edit("No stdout.")
				}
				else {
					m.edit("```" + clean(stdout) + "```")
				}
				if (clean(stderr) == "") {
					message.channel.send("No stderr.")
				}
				else {
					message.channel.send("```" + clean(stderr) + "```")
				}
			});
		}
		else {
			try {
				const code = message.content.replace("~eval ", "");
				var client = message.client
				let evaled = eval(code);
				
				if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
				
				message.channel.send(clean(evaled), {code:"xl"}).catch(err => message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``))
			} catch (err) {
				message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
			}
		}
	}
}