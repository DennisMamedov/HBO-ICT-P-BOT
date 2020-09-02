import { Message, Client } from "discord.js";
import { CommandContext } from "./CommandContext";

export default interface ICommand {
    name: string
    exec(commandContext : CommandContext) : void
    description: string,
    aliases: string[],
    checkPermission(commandContext : CommandContext) : boolean;
}

