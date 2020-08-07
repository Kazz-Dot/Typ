//codigo na descrição do vídeo!
const Discord = require("discord.js")
const { Client } = require("discord.js")

const client = new Discord.Client()
const { dprefix, token } = require("./config.json")
const db = require("quick.db");


client.on('ready', () => {
  console.log("O bot está online!")
})


client.on('message', message => {
  let prefix = db.get(`prefixo_${message.guild.id}`)
  if(prefix == null) prefix = dprefix
  
  if(message.author.bot) return
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(prefix)) return;
  
  let args = message.content.split(" ").slice(1)
  let command = message.content.split(" ")[0]
  command = command.slice(prefix.length)
  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (e) {
    console.log(e)
  } //código na descrição
  
 


  
})

client.login(`NzM4OTIyNDIyOTU4NTU1MTc2.XyS9Ig.ivDrbR0zmNaamu62VS3bv-LEdvI`)


//Para convidar seu bot use o link wue estará no meu servidor do discord
//basta colar o id do seu bot no link 
//vou mostrar como pegar o id!