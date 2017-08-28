const Commando = require('discord.js-commando');
const config = require("./config.json");
const sqlite = require('sqlite');
const path = require('path');

const client = new Commando.Client({
    owner: '349096456348499968'
});

sqlite.open(path.join(__dirname, "settings.sqlite3")).then(db => {
    client.setProvider(new Commando.SQLiteProvider(db));
});

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

client.login(config.token);