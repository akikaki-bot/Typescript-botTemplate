import { Client, GatewayIntentBits, Collection, Interaction, InteractionType, ComponentType } from 'discord.js';
import * as fs from 'fs'
import { RegisterTheSlashCommand } from './lib/register'
import { Command } from './lib'

export class Bot extends Client {
    constructor(){
        super({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]})
    }

    public command : Collection<string, Command> = new Collection()

    run(token: string){
        this.login(token)

        new RegisterTheSlashCommand(
            this.user?.id, token
        )

        this.on('ready', () => {
            console.log('client rdy')

            fs.readdirSync('./commands').forEach(async cmd => {

                //anyfile[ .ts ] じゃなかったら弾く
                if(!cmd.endsWith('ts')) return console.log(`${cmd} is not tsfile`)
                const command: Command = require('./commands/'+cmd)
                //Set
                this.command.set(command.data.name, command)

            })
        })

        this.on('interactionCreate',async (interaction: Interaction) => {
            if(interaction.isCommand()){
              const command = this.command.get(interaction.commandName)
              try{
                await command?.execute(interaction, this)
              }catch(error: Error | any){
                console.error(error)
              }
            }
        })

    }


}
