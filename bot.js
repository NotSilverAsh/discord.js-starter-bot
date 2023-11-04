require('dotenv').config();
const { Client, } = require('discord.js');
const { config } = require('dotenv');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildWebhooks,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.DirectMessageTyping,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildInvites,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildPresences,
    ]
});

client.on('ready', async (c) => {
    console.log(`[Bot] ${c.user.tag} Is Ready And Prepared`);
});

//Log into the bot
client.login(
    process.env.TOKEN
);
