const Discord = require('discord.js')

      exports.run = async (client, message, args) => {
        message.delete();
        let messageArray = message.content.split(" ");
          let cmd = messageArray[0];
          var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(cmd === '/desmutar'){     
          if(message.member.hasPermission('MANAGE_MESSAGES')) {
            if(!member) return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription("Necessário mencionar um usuario. /desmutar <@usuario>")
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
            ).then(msg => msg.delete({timeout: 10000}))
            var member = message.mentions.members.first();
            if(!member.roles.cache.has("789930878909677599")){ //cargo muted
            let embed = new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription(`O usuário ${member.user.tag} não está mutado`)
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
            return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
            } else if(!member) return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
            .setDescription("O usuário não está no cargo principal.")
            .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
            .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))  
            member.roles.remove("789930878909677599");

             message.channel.send(
                    new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`Punição revogada com sucesso no usuário ${member}, verifique os registros em <#808849036097355776>`)
                    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
                    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));

            let guild = client.guilds.cache.get("787531327402016798"); //id do svr da equipe
            var canal = message.guild.channels.cache.find(ch => ch.id === "808849036097355776"); //canal que vai mandar as logs do svr principal
            var canalog = guild.channels.cache.find(ch => ch.id === "808184446355243068"); //canal q vai mandar as logs da equipe
                    const msg = canal.send(    
                    new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(member.user.tag, member.user.displayAvatarURL())
                    .setDescription(`Revogação de Punição: Silenciamento\n`)
                    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
                    .setTimestamp())

                    canalog.send(    
                    new Discord.MessageEmbed()
 
                    .setColor('#8B000')
                    .setAuthor(member.user.tag, member.user.displayAvatarURL())
                    .setDescription(`Revogação de Punição: Silenciamento\n`)
                    .setFooter(`Revogação feita por ${message.author.tag}`, message.author.displayAvatarURL())
                    .setTimestamp())
          


        } else {
              return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor('#8B000')
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}))
      }
        }
      }
