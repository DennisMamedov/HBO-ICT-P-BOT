import { Bot } from './bot';
import { Client } from 'discord.js';

require('dotenv').config();

const bot = Bot.getInstance();
bot.connect();

const client : Client = bot.getClient();

export default client;
