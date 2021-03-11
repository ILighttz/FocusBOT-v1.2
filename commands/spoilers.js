const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();

var foto = args[0];
if (!message.member.hasPermission("ADMINISTRATOR")){
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#7a297a")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}

  if (!foto){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva as informações do spoiler. /spoiler <linkdospoiler(opcional)> <anuncio>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));
  }


if (!foto.includes("https://")){


  var anuncio = args.slice(0).join(" ");

  if (!anuncio){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva as informações do spoiler. /spoiler <linkdospoiler(opcional)> <anuncio>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

  var canal = message.guild.channels.cache.find(ch => ch.id === "806988258176139287");

  const msg = await canal.send(
  new Discord.MessageEmbed()

   .setColor('#8B000')
   .setDescription(anuncio)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp()); 

   await canal.send(`@everyone`).then(msg => msg.delete({timeout: 10}));
}
 else {

    var anuncio = args.slice(1).join(" ");
    var canal = message.guild.channels.cache.find(ch => ch.id === "8806988258176139287");

  const msg = await canal.send(
  new Discord.MessageEmbed()

   .setColor('#8B000')
   .setDescription(anuncio)
   .setImage(foto)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp()); 

   await canal.send(`@everyone`).then(msg => msg.delete({timeout: 10}));
   
 }

}
