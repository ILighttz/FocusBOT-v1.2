const Discord = require('discord.js')

exports.run = async (client,message,args) => {
  var guild = client.guilds.cache.get("730158392307482624"); /*servidor principal discord*/
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id

if(cmd.toLowerCase().startsWith("/ajuda")){
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


  if (!message.member.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
  let embed = new Discord.MessageEmbed()

   .setColor('#8B000')
   .setTitle(`Informações do BOT`) 
   .setDescription(`**Olá meu nome é FocusBOT, sou um BOT da moderação e auxilio. O meu prefix é "/" e aqui você podera ver todos os meus comandos!**\n\n**COMANDOS**\n**/ajuda** → Forneço informações e ajuda.\n**/ip** → Veja informações da Rede FOCUS\n**/sugestão** → Faça uma sugestão no Discord\n**/facção** → Confirme a presença da sua facção\n**/revisão** → Solicite uma revisão de punição\n**/avatar** → Consiga o avatar de um usuário\n**/jogadores** → Veja quantidade de jogadores no servidor\n**/solicitaryt** → Solicite sua Tag YT (Cumpra os requisitos)\n\n\n**Mais comandos a serem desenvolvidos, aguarde por atualizações**`  )
   .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
   .setTimestamp();

  return message.channel.send(embed);
} else {
  return message.channel.send(   
    new Discord.MessageEmbed()
  .setColor('#8B0000')
  .setTitle(`Informações do BOT`) 
  .setDescription(`**Olá meu nome é FocusBOT, sou um BOT da moderação e auxilio. O meu prefix é "/" e aqui você podera ver todos os meus comandos!**\n\n**COMANDOS**\n**/ajuda** → Forneço informações e ajuda.\n**/ip** → Veja informações da Rede FOCUS\n**/sugestão** → Faça uma sugestão no Discord\n**/facção** → Confirme a presença da sua facção\n**/revisão** → Solicite uma revisão de punição\n**/avatar** → Consiga o avatar de um usuário\n**/jogadores** → Veja quantidade de jogadores no servidor\n**/solicitaryt** → Solicite sua Tag YT (Cumpra os requisitos)\n\n**COMANDOS DA EQUIPE**\n**/limpar** → Limpe as ultimas mensagens no chat\n**/ping** → Veja o ping do servidor e bot\n**/anunciar** → Crie um anuncio\n**/banir** → Faça o banimento de um jogador\n**/expulsar** → Expulse um jogador\n**/mutar** → Mute um jogador temporariamente\n**/desmutar** → Desmute um jogador\n**/desbanir** → Desbanir um jogador\n**/spoilers** →  Adicione um spoiler\n**/travarchat** →  Trave o envio de mensagens de jogadores em um chat\n**/destravarchat** →  Destrave o envio de mensagens de jogadores em um chat\n\n\n**Mais comandos a serem desenvolvidos, aguarde por atualizações**`  )
  .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
  .setTimestamp());
}
};
}