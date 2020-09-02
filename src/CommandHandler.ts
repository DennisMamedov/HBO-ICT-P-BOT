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

    handleMessage(message: Message) : void {

        if(message.author.bot) return;
        if(message.content.startsWith(this.prefix)) {
            
            // This is a commandsyntax (starts with prefix)
            const commandContext : CommandContext = new CommandContext(message, this.prefix);

            // TODO: make this more efficient lol
            const permissionLevelCommands = this.ClientCommands.filter(command => command.checkPermission(commandContext));

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