import { Message } from "discord.js";

export class CommandContext {
    readonly commandName : string;
    readonly args : string[];
    readonly message : Message;
    readonly prefix : string;

    constructor(message: Message, prefix: string) {

        this.prefix = prefix;
        const preArgs : string[] = message.content.slice(prefix.length).trim().split(/ /g);
        this.commandName = preArgs.shift()!.toLowerCase();
        this.args = preArgs;
        this.message = message;
    
    }
}

/*
    This makes a pretty context from a message object from discord.
*/