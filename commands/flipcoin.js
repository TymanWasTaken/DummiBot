module.exports = {
	name: 'flipcoin',
	description: 'Flips a coin',
	async execute(message, args) {
        let random = (Math.floor(Math.random() * Math.floor(2)));
			
        if(random === 0) {
            message.channel.send('I flipped heads!');
        }
        else {
            message.channel.send('I flipped tails!');
        } 
		
	},
};