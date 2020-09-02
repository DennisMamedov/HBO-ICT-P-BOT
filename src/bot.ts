import { Client, Message, Collection } from 'discord.js';
import handleEvents from './eventHandler';


// Singleton for the discord client

export class Bot {
    private static instance: Bot;

    private client: Client = new Client();

    private constructor() {
        this.initClient();
    }

    static getInstance() : Bot {
        if(!Bot.instance) {
            Bot.instance = new Bot();
        }
        return Bot.instance;
    }

    // Log in with token (stored in /static/env/token.env)
    connect() : void {
        this.client.login(process.env.TOKEN).then(_ => {
            console.log('Connection to Discord established!');
        }).catch(e => {
            console.error(e);
        })
    }

    getClient() : Client {
        return this.client;
    }

    private initClient() : void {
        if(!this.client) return;
        handleEvents(this.client);
    }

}