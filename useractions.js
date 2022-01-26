const config = require("./config.json")
const {spawn} = require('child_process')
const fs = require("fs")

// doesn't work
module.exports = {
    async send(message, pokemonName) {
        /* messagecontent.json
        {
            "content": "",
            "url": ""
        }
        */

        // json file write
        const url = `https://discord.com/api/v8/channels/${message.channel.id}/messages`
        const towrite = {
            content: `${config["botPrefix"]}catch ${pokemonName}`,
            url: url
        }
        fs.writeFileSync('./messagecontent.json', JSON.stringify(towrite))

        // python file
        const python = spawn('py', ['./sendMessage.py'])
        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`)
        })
    }
}