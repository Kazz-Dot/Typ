const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
 let prefix = db.get(`prefixo_${message.guild.id}`)
 let embedP = new Discord.MessageEmbed()
    .setTitle(`Central de Ajuda | ${bot.user.username}`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("RANDOM")
    

mestsão
<:emoji_6:738826801710891048> | Informações
`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.disprm<:jornalMDM:740068489724952586> at: "png"})}`);
  message.channel.send(*mbedP).then(msg => {
    msg.react("738826748107554866");   
    msg.react("738826711067656222");
    msg.react("738826801710*91048");
    msg.react("741396674928181351");
    let filtro1 = (r, u) => r.emoji.name === "emoji_5" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "emoji_4" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2);
    let filtro3 = (r, u) => r.emoji.name === "emoji_6" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3);
    let filtro4 = (r, u) => r.emoji.name === "4️⃣" && u.id === message.author.id;
    let coletor4 = msg.createReactionCollector(filtro4);
    let filtro5 = (r, u) => r.emoji.name === "5️⃣" && u.id === message.author.id;
    let coletor5 = msg.createReactionCollector(filtro5);
    let filtroV = (r, u) => r.emoji.name === "SetaTKF1" && u.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV);
    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Central de Ajuda | Moderação")
        .setColor("RANDOM")
        .setDescription(`<a:star1:740381188182769754> Todos os comandos da categoria **Moderação**
Total de Comandos da Categoria: **2**
》 \`${prefix}anunciar\`
》 \`${prefix}slowmode\`
》 \`${prefix}setprefix\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    });
    coletor2.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Diversão")
      .setColor("RANDOM")
      .setDescription(`<a:star1:740381188182769754> Todos os comandos da categoria **Diversão**
Total de Comandos da Categoria: **1**
》 \`${prefix}ascii\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor3.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Economia")
      .setColor("RANDOM")
      .setDescription(`<a:star1:740381188182769754> Todos os Comandos da Categoria **Informações**
Total de Comandos da Categoria: **0**`)
      .setTimestamp()
      .setFooter("Presione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor4.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Adicionais")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos da Categoria **Adicionais**
Total de Comandos da Categoria: **8**
》 \`'ping\`
》 \`'sobremim\`
》 \`'ontime\`
》 \`'status\`
》 \`'bug\`
》 \`'suporte\`
》 \`'créditos\`
》 \`'invite\`
》 \`'cpu\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor5.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Configuração")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos da Categoria **Configurações**
Total de Comandos da Categoria: **4**
》 \`'setautorole\`
》 \`'welcome\`
》 \`'leave\`
》 \`'desativar\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletorV.on("collect", async (r) => {
      msg.edit(embedP)
      r.users.remove(message.author)
    })
  });
};
exports.help = {
  name: "'ajuda"
};