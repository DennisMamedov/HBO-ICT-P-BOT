import { Bot } from './bot';

require('dotenv').config({path: "static/env/token.env"});

const client = Bot.getInstance();
client.connect();