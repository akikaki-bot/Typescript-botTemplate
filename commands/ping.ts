import { Command } from '../lib'

const ping: Command = {
    data: {
        name: "ping",
        description: "ぽんぐ"
    },
    async execute(interaction){
        interaction.reply('PONG')
    }
}

module.exports = ping