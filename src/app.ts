import { Bot } from './bot';
import { Client } from 'discord.js';

require('dotenv').config({path: "static/env/token.env"});

const bot = Bot.getInstance();
bot.connect();

const client : Client = bot.getClient();

export default client;