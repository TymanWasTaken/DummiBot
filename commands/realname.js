Discord = require("discord.js")
module.exports = {
	name: 'realname',
	category: 'info',
	description: 'real discord bot name',
	async execute(message, args) {
		await message.channel.send('```\n  _____   _    _   __     __   __     __   _   ______    ______   _______ \n |  _  \\ | |  | | |  \\   /  | |  \\   /  | |_| |  __  \\  /  __  \\ |__   __|\n | | | | | |  | | | | \\_/ | | | | \\_/ | |  _  | |__|  | | |  | |    | |   \n | | | | | |  | | | |\\___/| | | |\\___/| | | | |  __  /  | |  | |    | |   \n | | | | | |  | | | |     | | | |     | | | | | |  \\  \\ | |  | |    | |   \n | |_| | | |__| | | |     | | | |     | | | | | |__/  / | |__| |    | |   \n |_____/ \\______/ |_|     |_| |_|     |_| |_| |______/  \\______/    |_|    ```')
	},
};