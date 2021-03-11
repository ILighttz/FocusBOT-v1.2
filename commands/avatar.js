const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  if(cmd.toLowerCase().startsWith("/avatar")){
    if (message.guild.id === "730158392307482624")/*servidor principal*/{ 
      if (!message.member.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus"))/*cargo da equipe*/{
      if(ChannelID !== "806990130165841961")/*canal #comandos*/{
          let embed = new Discord.MessageEmbed()
  
     .setColor('#8B000')
     .setAuthor(message.author.tag, message.author.displayAvatarURL())
     .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#806990130165841961>`)
     .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
     .setTimestamp();
  
    return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
      };
  };
  }
  

  let embed = new Discord.MessageEmbed() 
    .setColor(`#7a297a`) 
    .setTitle(`Avatar de ${user.username}`) 
    .setImage(avatar) 
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 
  };
}