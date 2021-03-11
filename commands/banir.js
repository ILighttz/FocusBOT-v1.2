const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {

  message.delete();
  let guild = client.guilds.cache.get("787531327402016798"); //id do svr da equipe
  const string = '```'
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
 if (!message.member.hasPermission("BAN_MEMBERS")){
    return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000})) 
 } else {
    if (!membro) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Necessário mencionar um usuario. /banir <@usuario> <motivo>`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}))
    
    if (membro === message.member) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Você não pode punir você mesmo!`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}))

    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Nececssário colocar o motivo. /banir <@usuario> <motivo>`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}))
    


      var canal = message.guild.channels.cache.find(ch => ch.id === "808849036097355776"); //canal que vai mandar as logs no svr principal
      var canalog = guild.channels.cache.find(ch => ch.id === "808184446355243068"); //canal que vai mandar as logs no svr da equipe
 
    message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Você realmente deseja banir o jogador ${membro}?`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => {
        msg.react("✅")
        msg.react("❌")
        msg.delete({timeout: 10000})
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let filtro2 = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
        let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canal.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
    .setDescription(`Punição: Banimento\nMotivo: ${motivo}`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp())
            membro.ban();
            membro.send(    
              new Discord.MessageEmbed()
              .setColor('#8B000')
              .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
              .setDescription(`Você foi banido do servidor **${message.guild.name}**\nMotivo: ${motivo}`)
              .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
              .setTimestamp())
            message.channel.send(
              new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`Punição aplicada com sucesso no usuário ${membro}, verifique os registros em <#808849036097355776>`)
                    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
                    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
    canalog.send(    
    new Discord.MessageEmbed()
    .setColor('#8B000')
    .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
    .setDescription(`Punição: Banimento\nMotivo: ${motivo}`)
    .setFooter(`Punição feita por ${message.author.tag}`,message.author.displayAvatarURL())
    .setTimestamp())
        })
         coletor2.on("collect", cp => {
            cp.remove(message.author.id);
            message.channel.send(
              new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`Punição canelada com sucesso`)
                    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
                    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
         })
    })
}
}
 
exports.help = {
    name: 'ban'
}