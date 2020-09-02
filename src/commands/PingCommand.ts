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
    This will be the template for commands.

    Copy this file and refactor all variables accordingly. The exec function contains the logic.

    Import this class into ../CommandHandler.ts and add it to commandClassList in the constructor.
*/