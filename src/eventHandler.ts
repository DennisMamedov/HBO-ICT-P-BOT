import { Client, Message } from 'discord.js';
import * as fs from 'fs';
import { CommandContext } from './CommandContext';
import { CommandHandler } from './CommandHandler';

export default function handleEvents(client : Client) {

    // TODO: move prefix to config file
    const commandHandler : CommandHandler = new CommandHandler("*");

    client.on("ready", () => console.log());
    client.on("error", console.error);
    client.on("message", (m) => commandHandler.handleMessage(m));

}

/*
    All events should be handled here.
 */