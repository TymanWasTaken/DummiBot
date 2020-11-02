const {randColor} = require("../funcs.js")
Discord = require("discord.js")
module.exports = {
    name: 'rps',
    category: 'fun',
	description: 'Play rock, paper, scissors.',
	async execute(message, args) {
        var embed = new Discord.MessageEmbed()
        .setTitle(`Rock, Paper or Scissors`)
        .setDescription(`<@${message.author.id}> How to play: \`rps <rock|paper|scissors>\``)
        .setImage('https://media1.tenor.com/images/8b20c9c09b08ad7e9d908eba2be5031d/tenor.gif?itemid=12484431')
        .setColor(randColor())
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];
        
        const choice = args[0];
        if (!choice) return message.channel.send(embed);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I chose paper, You lost!');
                else return message.reply('I chose scissors, You won!');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I chose scissors, You lost!');
                else return message.reply('I chose rock, You won!');        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('I chose rock,You lost!');
                else return message.reply('I chose paper, You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    },
};