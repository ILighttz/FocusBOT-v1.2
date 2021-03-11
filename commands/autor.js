const Discord = require('discord.js')

exports.run = async (client,message,args) => {
  var guild = client.guilds.cache.get("730158392307482624"); /*servidor principal discord*/
  let messageArray = message.content.split(" ");
  let light = client.users.cache.find(user => user.id === '258589927242072064');
  let cmd = messageArray[0];
  var ChannelID = message.channel.id

if(cmd.toLowerCase().startsWith("/autor")){
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
   .setTitle('Desenvolvedor do BOT')
   .setThumbnail(light.displayAvatarURL())
   .setDescription(`\n\nO ${client.user}, foi desenvolvido diretamente pelo desenvolvedor ${light.tag}.\n\nSe houver alguma duvida relacionado ao desenvolvimento/bot, basta enviar uma mensagem em seu privado.`)
   .setFooter(`©️ ${light.tag} - Toggle`)

  return message.channel.send(embed);
};
}