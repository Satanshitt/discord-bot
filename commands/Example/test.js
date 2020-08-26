const Discord = require(`discord.js`);

module.exports = {
    name: `test`,
    category: `Example`,
    description: `Test command!`,
    timeout: 5000,
    usage: `test`, 
    run: async (client, msg, args) => {
        
        msg.channel.send("Hello world!")
    }
    
}
