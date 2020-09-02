import { Client, Message, Collection } from 'discord.js';
import handleEvents from './eventHandler';

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

    connect() : void {
        this.client.login(process.env.TOKEN).then(_ => {
            console.log('Connection to Discord established!');
        }).catch(e => {
            console.error(e);
        })
    }

    private initClient() : void {
        if(!this.client) return;
        handleEvents(this.client);
    }

}