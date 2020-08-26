const misc = require('../data/config.json'),
Timeout = new Set(),
ms = require('ms');

module.exports = async (client, msg) => {


    if (msg.author.bot) return

    let prefix = misc.PREFIX

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(msg.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        msg.channel.send('Hey!')}


    let command = client.commands.get(cmd);
    if (!command) {
        command = client.commands.get(client.aliases.get(cmd))
    }


    if (msg.content.indexOf(prefix) !== 0) return;

      
        if (command) {
          if(command.timeout && !misc.DEVELOPERS.includes(msg.author.id)) {
            if (Timeout.has(`${msg.author.id}${command.name}`)) {
              return msg.reply(
                `You can only use this command every ${ms(command.timeout)}!`
              );
            } else {
              command.run(client, msg, args);
              Timeout.add(`${msg.author.id}${command.name}`);
              setTimeout(() => {
                Timeout.delete(`${msg.author.id}${command.name}`);
              }, command.timeout);
            }
          } else {
            command.run(client, msg, args);
          }
        }
    }
  