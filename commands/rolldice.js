function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
Discord = require("discord.js")
module.exports = {
	name: 'rolldice',
	category: 'fun',
	description: 'roll a dice',
	async execute(message, args) {
        const rollDice = () => Math.floor(Math.random() * 6) + 1;
		if (!args[0]) {
			return await message.reply("You must give a number of dice!")
		}
		if (Number(args[0]) > 100 || Number(args[0]) < 1) {
			return await message.reply("Number must be between 1 and 100!")
		}
		var m = await message.channel.send(`rolling ${args[0]} dice...`);
		await sleep(2000)
		var str = "Rolls:\n";
		for (var i = 0; i < Number(args[0]); i++) {
			str = str + (i+1) + ": " + rollDice() + "\n"
		}
		m.edit(`${str}`);
    },
};