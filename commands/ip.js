const util = require('minecraft-server-util');

const Discord = require('discord.js')


exports.run = (client,message,args) => {

let guild = client.guilds.cache.get("730158392307482624");
  const string = '```'
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  if(cmd.toLowerCase().startsWith("/ip")){
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
}

  
util.status('redefocus.com.br') // port is default 25565
    .then((response) => {
        let embed = new Discord.MessageEmbed()
  .setColor('#8B000')
   .setTitle(`Informações da Rede Focus`) 
   .setDescription(`**Informações**\nLoja: EM MANUTENÇÃO\nIp: redefocus.com.br\n\n**Status servidor <:on:780587101241999362>**\nJogadores online: ${response.onlinePlayers}/${response.maxPlayers} \n${string}Online${string}\n`)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp();

  message.channel.send(embed);
    })
    .catch((error) => {
      message.channel.send(  
    new Discord.MessageEmbed()
   .setColor('#8B000')
   .setTitle(`Informações da Rede Focus`) 
   .setDescription(`**Informações**\nLoja: EM MANUTENÇÃO\nIp: redefocus.com.br\n\n**Status servidor <:pertuba:780587176604860487>**\nJogadores online: 0/0 \n${string}Offline${string}\n`)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp());
    });
}
