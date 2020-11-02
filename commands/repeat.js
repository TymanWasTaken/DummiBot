module.exports = {
	name: 'repeat',
	category: 'bot maker',
	description: 'Runs command multiple times',
	check(message) {
		return message.author.id == 482513687417061376 || message.author.id == 541015870072422410 || message.author.id == 487443883127472129
	},
	async execute(message, args) {
		const num = Number(args[0])
		try {
			command = require(`./${args[1]}.js`)
		}
		catch {
			return message.reply(`Invalid command`)
		}
		let m = message
		let args1 = args
		args1.splice(0, 2)
		let margs = args1
		m.content = `${args[1]} ${margs.join(" ")}`
		m.cleanContent = `${args[1]} ${margs.join(" ")}`
		console.log(margs)
		for (let i = 0; i < num; i++) {
			command.execute(m, margs)
		}
	}
}