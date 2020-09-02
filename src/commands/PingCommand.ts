import ICommand from "../ICommand";
import { CommandContext } from "../CommandContext";

export class PingCommand implements ICommand {
    name = "Ping"
    exec(commandContext : CommandContext) : void {
        commandContext.message.reply("Pong!");
    }
    description = "Generic ping command";
    aliases = ["ping", "pong"];
    checkPermission(commandContext: CommandContext) : boolean {
        return true;
    }
}

/*
    name: string
    exec(commandContext : CommandContext) : void
    description: string,
    aliases: string[],
    checkPermission(commandContext : CommandContext) : boolean;
*/