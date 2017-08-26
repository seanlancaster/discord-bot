const Commando = require('discord.js-commando');
const client = new Commando.Client({
    owner: '349096456348499968'
});

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

client.login('MzQ5MDk2NDU2MzQ4NDk5OTY4.DHwhCw.MTYAiNDo9pcjfTjoTAzF3mxPE7s');