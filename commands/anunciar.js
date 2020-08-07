//comando de anunciar

const Discord = require('discord.js')

exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
   if(!message.member.permissions.has("MANAGE_MESSAGES")) {
     return message.channel.send(`<a:errou:739381414562234389> **| Você não possui permissões o suficiente para executar este comando, Requer: **Gerenciar Mensagens`)
    }
  
  message.channel.send("<:jornalMDM:740068489724952586> **| Onde deseja que eu envie sua mensagem?**").then(msg1 => {
    let canal = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
      .on('collect', c => {
        let channel = c.mentions.channels.first()
          if(!channel) {
            
            message.channel.send("Por favor, mencione um canal válido!")
        
          } else {
            
            message.channel.send("<:jornalMDM:740068489724952586> **| Qual o título do anúncio em embed?**").then(msg2 => {
              let titulo = message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                .on('collect', t => {
                  let title = t.content
                  
                  
            message.channel.send("<:jornalMDM:740068489724952586>**| Qual sera a descrição deste anúncio?**").then(msg3 => {
              let descrição = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let desc = d.content
                  
                  let anunciar = new Discord.MessageEmbed()
                    .setColor('PURPLE')
                    .setTitle(title)
                    .setDescription(desc)
                    .setFooter("Bernado Anunciar | Requisitado por: "+message.author.username, message.author.displayAvatarURL({size: 32}))
                  
                bot.channels.cache.get(channel.id).send(anunciar)  
                  
                  message.channel.send("<a:acertou:739381357993525289> **Enviei o anúncio requisitado ao <#"+channel.id+"> com sucesso!**")
                  
             })
            })      
           })
          })
         }
       })  
      })

}