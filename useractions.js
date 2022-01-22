require('dotenv').config()
const fetch = require('cross-fetch')
// doesn't work
module.exports = {
    send(messagecontent, channelId) {
        const url = `https://discord.com/api/v8/channels/${channelId}/messages`
        const headers = {
            'Authorization': process.env.tokenUser 
        }
        const data = {
            content: messagecontent
        }

        console.log('ok')
        
    }
}