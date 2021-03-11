const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  let userlight = client.users.cache.find(user => user.id === '258589927242072064');
  if (!message.member.hasPermission("ADMINISTRATOR")){
    return message.channel.send(    
             new Discord.MessageEmbed()
             .setColor("#8B000")
             .setDescription(`Sem permissão`)
             .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
 }
  let embed = new Discord.MessageEmbed()

    .setColor('#8B000')
   .setTitle(`Latencia Geral`) 
   .setDescription(`Latência da API: **${Math.round(client.ws.ping)}ms**`)
   .setFooter(`©️ Desenvolvedor - ${userlight.tag}`, userlight.displayAvatarURL())
   .setTimestamp();

  message.channel.send(embed);
};

