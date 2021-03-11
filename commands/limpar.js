const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setTitle(`**Limpar Chat**`) 
    .setDescription(`Você não tem permissão para isso`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
    ); //ISSO OFF PARA NÃO TER FLOOD
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setTitle(`**Limpar Chat**`) 
    .setDescription(`Informe um número de 1 até 99, para excluir mensagens`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  );
  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setTitle(`**Limpar Chat**`) 
    .addField(`Foram deletadas`,args[0] + ` mensagens por ` + message.author)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};