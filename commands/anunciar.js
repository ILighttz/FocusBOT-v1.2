const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();
var anuncio = args.slice(0).join(" ");
if (!message.member.hasPermission("ADMINISTRATOR")){
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#8B000")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}

if (!anuncio){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#8B000")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva as informações do anuncio. /anunciar <anuncio>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}
  var canal = message.guild.channels.cache.find(ch => ch.id === "787335469255360532");

  const msg = await canal.send(
  new Discord.MessageEmbed()

   .setColor('#8B000')
   .setDescription(anuncio)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp()); 

   await canal.send(`@everyone`).then(msg => msg.delete({timeout: 10}));

}
