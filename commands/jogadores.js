const Discord = require('discord.js')

exports.run = (client,message,args) => {
  let guild = client.guilds.cache.get("730158392307482624");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  if(cmd.toLowerCase().startsWith("/jogadores")) {
    if (message.guild.id === "730158392307482624")/*servidor principal*/{ 
      if (!message.member.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus"))/*cargo da equipe*/{
      if(ChannelID !== "806990130165841961")/*canal #comandos*/{
          let embed = new Discord.MessageEmbed()
  
     .setColor('#8B000')
     .setAuthor(message.author.tag, message.author.displayAvatarURL())
     .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#806990130165841961>`)
     .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
     .setTimestamp();
  
    return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
      };
  };
  }
  let embed = new Discord.MessageEmbed()
  .setColor('#8B000')
   .setTitle(`MEMBROS NO SERVIDOR DO DISCORD`)
   .setDescription(`Olá,${message.author} o servidor ${guild.name} conta com membros totais de ${guild.memberCount} jogadores `)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp()

  return message.channel.send(embed);
  }
}