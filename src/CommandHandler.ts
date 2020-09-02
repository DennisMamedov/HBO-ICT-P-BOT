import { Collection, Client, Message } from 'discord.js';
import ICommand from './ICommand';
import { CommandContext } from './CommandContext';
import { PingCommand } from './commands/PingCommand';

export class CommandHandler {
    private ClientCommands: ICommand[];
    private prefix: string;
    
    constructor(prefix: string) {
        const commandClassList = [
            PingCommand
        ];

        this.ClientCommands = commandClassList.map(commandClass => new commandClass());
        this.prefix = prefix;
    }

    // Method that reacts to message events from discord
    handleMessage(message: Message) : void {

        if(message.author.bot) return;
        if(message.content.startsWith(this.prefix)) {
            
            // Context with prefix, commandname, arguments and message object
            const commandContext : CommandContext = new CommandContext(message, this.prefix);

            // TODO: make this more efficient lol
            // All commands the member has access to.
            const permissionLevelCommands = this.ClientCommands.filter(command => command.checkPermission(commandContext));

            // The command that is being called.
            const propCommand = this.ClientCommands.find(command => command.aliases.includes(commandContext.commandName));

            if(!propCommand) {
                message.channel.send('Dat commando bestaat niet!');
            } else if(!permissionLevelCommands.includes(propCommand)) {
                message.channel.send('Jij mag dat commando niet gebruiken :(');
            } else {
                
                propCommand.exec(commandContext); // TODO: Promisify and catch error!
            }

        } else {
            // This is a non-commmand message
            return;
        }
    }

}
