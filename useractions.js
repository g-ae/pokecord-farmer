const config = require("./config.json")
const fs = require("fs")

// doesn't work
module.exports = {
    send(pokemonName) {
        /* messagecontent.json
        {
            "content": "",
            "autorization": "",
            "url": ""
        }
        */
        // non fonctionnel
        var child_process = require('child_process');
        child_process.exec('py sendMessage.py', function (err){
            if (err) {
                console.log("child processes failed with error code: " + err.code);
            }
        });

        const url = `https://discord.com/api/v8/channels/${config["channelId"]}/messages`
        const towrite = {
            content: `${config["botPrefix"]}catch ${pokemonName}`,
            autorization: `Authorization: ${config["tokenUser"]}`,
            url: url
        }
        fs.writeFileSync('./messagecontent.json', JSON.stringify(towrite))
    }
}