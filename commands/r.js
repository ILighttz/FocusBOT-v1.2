const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  let userlight = client.users.cache.find(user => user.id === '258589927242072064');
  if (message.author.id == "258589927242072064")
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setTitle(`Focus BOT`) 
    .setDescription(`Reiniciando...`)
    .setFooter(`©️ Desenvolvedor - ${userlight.tag}`, userlight.displayAvatarURL())
    .setTimestamp())
    .then(() => {
  process.exit(1);
}).then(msg => msg.delete({timeout: 5000}));

   else if (message.author.id == "434441191585611777")
   return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setTitle(`Focus BOT`) 
    .setDescription(`Reiniciando...`)
    .setFooter(`©️ Desenvolvedor - ${userlight.tag}`, userlight.displayAvatarURL())
    .setTimestamp())
    .then(() => {
  process.exit(1);
}).then(msg => msg.delete({timeout: 5000}));
    else return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setTitle(`Eternity BOT`) 
    .setDescription(`Você não tem permissão para isso`)
    .setFooter(`©️ Desenvolvedor - ${userlight.tag}`, userlight.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 5000}));;
    
}