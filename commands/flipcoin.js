module.exports = {
    name: 'flipcoin',
    category: 'fun',
	description: 'Let me flip a coin.',
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