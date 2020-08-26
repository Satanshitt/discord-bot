
module.exports = async (client) => {
    console.log(client.config.START)
    
    const status = [
      {name: 'Visual Studio Code', type: 'PLAYING'},
      {name: 'Discord.js', type: 'WATCHING'},
      {name: 'Bot created by Satanshitt#4493', type: 'WATCHING'},
  ]
   function Presence() {
       const base = status[Math.floor(Math.random() * status.length)]
       client.user.setActivity(base)
   }
   Presence();
   setInterval(() => Presence(), 5000)
   
}