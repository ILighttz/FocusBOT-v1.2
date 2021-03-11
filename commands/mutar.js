const Discord = require("discord.js");
 
    exports.run = async (client, message) => {
    message.delete();
    const ms = require("ms");
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    let cmd = messageArray[0];
    var member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const string = '```'
     if(cmd === '/mutar'){
       if(message.member.hasPermission('MANAGE_MESSAGES')) {      
            if (!member){
            return message.channel.send(     
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription("Nenhum usuario foi informado. /mutar <@usuario> <tempo (1s,10m,1h)> <motivo>")
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
            ).then(msg => msg.delete({timeout: 10000}));}

            let time = args[1];
            if (!time) {
            return  message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription("Não foi informado a duração do Silenciamento. /mutar <@usuario> <tempo (1s,10m,1h)> <motivo>")
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));
            }

              var motivo = args.slice(2).join(" ");
              if (!motivo) return  message.channel.send(    
              new Discord.MessageEmbed()
              .setColor('#8B000')
              .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
              .setDescription("Não foi informado o motivo do Silenciamento. /mutar <@usuario> <tempo (1s,10m,1h)> <motivo>")
              .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
              .setTimestamp()).then(msg => msg.delete({timeout: 10000}))
 

            if(member.roles.cache.has("789930878909677599")){ //cargo Silenciamentod
            let embed = new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription(`O usuário ${member} já está mutado`)
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
            return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
 
 
      } else if(message.member.hasPermission('MANAGE_MESSAGES')) {
            var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!membro) return message.channel.send(     
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription("O tempo não foi informado. /mutar <@usuario> <tempo (1s,10m,1h)> <motivo>")
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))                 
            let mainrole = message.guild.roles.cache.find(role => role.name === "• Players •"); //cargo principal do svr
            let role = message.guild.roles.cache.find(role => role.name === "Silenciado"); //cargo que vai mutar
 
            if (!role) return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription(`Não existe o cargo ${role} para executar o comando.`)
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
            }

               message.channel.send(
              new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`Punição aplicada com sucesso no usuário ${member}, verifique os registros em <#808849036097355776>`)
                    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
                    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
 
            member.roles.add("789930878909677599");

            let guild = client.guilds.cache.get("787531327402016798");
            var canal = message.guild.channels.cache.find(ch => ch.id === "808849036097355776"); //canal que vai mandar as logs
            var canalog = guild.channels.cache.find(ch => ch.id === "808184446355243068");
                    const msg = canal.send(    
                    new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(member.user.tag, member.user.displayAvatarURL())
                    .setDescription(`Punição: Silenciamento\nDuração: ${time}\nMotivo: ${motivo}\n` )
                    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
                    .setTimestamp());
                    canalog.send(    
                    new Discord.MessageEmbed()
                    .setColor('#8B000')
                    .setAuthor(member.user.tag, member.user.displayAvatarURL())
                    .setDescription(`Punição: Silenciamento\nDuração: ${time}\nMotivo: ${motivo}\n` )
                    .setFooter(`Punição feita por ${message.author.tag}`,message.author.displayAvatarURL())
                    .setTimestamp());  
            setTimeout( function () {
              if (member.roles.cache.has("789930878909677599")){
                member.roles.remove("789930878909677599");
                canal.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setDescription(`\nFoi removido o silenciamento do usuario AUTOMATICAMENTE\n`)
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
  )
              }
            }, ms(time));
           
        } else {
             return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000})) 
        }
    }
    }
 
exports.help = {
    name: 'Silenciamento'
}