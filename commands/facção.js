const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
var contenttag = args[1];
var server = args[0];
var nome = args.slice(2).join(" ");

if(cmd === "/facção"){
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

if (!server) {
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados da facção após o comando. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}
if (!contenttag){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados da facção após o comando. /facção <servidor (F.Caribe)> <tag> <nome>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

if (args[1].length > 3){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`A tag da facção não pode ser maior que 3 letras. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}


if (!nome){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados da facção após o comando. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

if (server == "F.Caribe"){
  var canal = message.guild.channels.cache.find(ch => ch.id === "787436889892061234");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setDescription(`A facção **${contenttag} - ${nome}** confirmou presença no **${server}**`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  );
  await message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Sua facção foi confirmada, verifique em <#787436889892061234>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));

  const emojis = ["💣"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}  else {
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Verifique a ortografia do servidor ou coloque um de nossos servidores disponiveis. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
  }
}
}