const discord = require('discord.js')

module.exports = {
  name:"eval",
  aliases: ['cmd'],
  run: async (client, message, args) => {
   if(!['712402867155370075'].includes(message.author.id)) {
     return message.channel.send('Apenas meu criador pode usar esse comando')
   }
    
    let code = args.slice(0).join(" ")
    
    try {
      let ev = require("util").inspect(eval(code))
      if(ev.length > 1950) {
        ev = ev.subtr(0, 1950);        
      }
      
      let embed = new discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(":desktop: Console:" + `\n\` ${code} \` \n` + ":card_box: Resposta: " + `\` ${ev} \` `)
      
      message.channel.send(embed)
      
     
    } catch(err) {
      let erro = new discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(":desktop: Console:" + `\n\` ${code} \` \n` + ":card_box: Resposta: " + `\` Eu detectei um erro: ${err} \``)
      
      message.channel.send(erro)
    }
    
    
    
  }
}
