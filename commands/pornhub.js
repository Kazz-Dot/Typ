const discord = require('discord.js')

module.exports = {
  name:"pornhub",
  aliases:['pornhubtext'],
  run: async (client, message, args) => {
    let pornhub = args.join("+").split("/")
    if(!pornhub[0]) return message.channel.send("Digite algo porfavor!")
    if(!pornhub[1]) return message.channel.send("Desculpe, parece que você usou de maneira inválida, utilize `b!pornhub <mensagem 1>/<mensagem 2>`!")
    if(pornhub[0].lenght > 23) message.channel.send("🗣️ **| Hey! Você so pode usar até 23 caracteres.**")
    if(pornhub[1].lenght > 23) message.channel.send("🗣️ **| Ei! Você so pode usar até 23 caracteres.**")
   
    let embed = new discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle('<:Pornhub:741168559660466246>  | PornHub Comando')
    .setImage(`https://api.alexflipnote.dev/pornhub?text=${pornhub[0]}&text2=${pornhub[1]}`)
    
    message.channel.send(embed)
  }
}
