const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {  
  let prefix = db.get(`prefixo_${message.guild.id}`)
  
  message.reply(`Minha latência agora é **${client.ws.ping}ms**!`)
}