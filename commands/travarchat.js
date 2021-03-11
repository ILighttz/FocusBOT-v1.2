const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();
let guild = client.guilds.cache.get("730158392307482624");
let cmd = messageArray[0];
if (cmd == "/travarchat"){ 
if (!message.member.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#7a297a")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}


const role = guild.roles.cache.find(role => role.name === "• Players •");

if (message.channel.permissionsFor(role.id).has('SEND_MESSAGES', true)){

message.channel.updateOverwrite(role.id, { SEND_MESSAGES: false });
  

  message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Bloqueou o envio de mensagens em todos o canais.\nPara desbloquear utilizar /destravarchat`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  );
} else{
    message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Este canal já está com o envio de mensagens bloqueados.\nPara desbloquear utilizar /destravarchat`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  );
}



}
}
