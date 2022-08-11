import { REST } from '@discordjs/rest'
import { Routes } from 'discord.js'
import fs from 'fs'
import { Command } from './'
import { SlashCommandComponent } from './slashcommand'




export class RegisterTheSlashCommand {
    constructor(clientid: string | undefined,token:string){
        if(clientid === undefined) throw new Error('Client ID Unknown')

        const RegisterCommand : Array<SlashCommandComponent> = []

        try { 
        fs.readdirSync('./commands').forEach(files => {
            if(!files.endsWith('ts')) return;
            const command: Command = require(`../commands/${files}`)
            RegisterCommand.push(command.data)
        }) 

        const rest = new REST({ version: "10"}).setToken(token);
        
        (async () => {
          console.log("started the Register / Command!")
          console.log(RegisterCommand)
          await rest.put(Routes.applicationCommands(clientid), 
            { body: RegisterCommand },
          )
             console.log('Finished Register / Command')
         })()
      } catch(error: Error | any){
        console.error(error)
      }
    }
}