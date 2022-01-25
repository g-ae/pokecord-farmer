const Discord = require('discord.js')
const Pokemon = require('pokemon.js')
const { send } = require('./useractions')
const PokecordId = 705016654341472327
const config = require("./config.json")
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.GUILD_MEMBERS, 
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => {
    client.user.setActivity('Pokémon', { type: 'WATCHING' });
    console.log('bot is good to go')
})

client.on('messageCreate', (message) => {
    if (message.author.id != PokecordId) return
    try {
        const sentEmbed = message.embeds[0]

        //if (sentEmbed.title.includes('Wild') || sentEmbed.title.includes('wild')) {
            // wild pokemon appeared
            const imageUrl = sentEmbed.image.url.substring(36)
            const pokemonId = imageUrl.substring(0, imageUrl.length - 4)
            
            Pokemon.getPokemon(pokemonId).then(r => {
                send(r.name)
            })
        /*} else {
            console.log('no wild pokemon')
        }*/
    } catch(err) {
        console.log('error ?')
        throw(err)
    }
})

client.login(config["tokenBot"])