import { SlashCommandComponent } from './slashcommand'
import { CommandInteraction, Client } from 'discord.js'


export type Command = {
    data: SlashCommandComponent
    execute: (interaction: CommandInteraction, client?: Client) => void;
}