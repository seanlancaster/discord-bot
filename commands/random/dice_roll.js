const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
            args: [
                {
                    key: 'roll',
                    prompt: 'roll',
                    type: 'string',
                    default: 'D6',
                    validate: text => {
                        if (text.toLowerCase().startsWith('d')) return true;
                        return 'Roll must start with d';
                    }
                }
            ]
        });
    }

    async run(message, args) {
        var { roll } = args;
        
        if (roll.toLowerCase().startsWith('d')) {
            roll = roll.substr(1);
        }

        roll = Math.floor(Math.random() * parseInt(roll)) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;