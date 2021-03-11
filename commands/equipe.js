const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();
let guild = client.guilds.cache.get("730158392307482624");
var alt = args[1];
var padrãoequipe = message.guild.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus");
var nick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
var canalalt = guild.channels.cache.find(ch => ch.id === "815022653727047681");
if (!message.member.roles.cache.find(r => r.name === "👩🏻‍🏫│Resp. Staff")){
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#7a297a")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}

if (!nick) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`É preciso mencionar um usuario. /equipe <@usuario> <entrar/tranferir/promover/remover> <cargo>`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));

if (!alt) return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`É preciso informar uma função. /equipe <@usuario> <entrar/tranferir/promover/remover> <cargo>`)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 10000}));

if (alt == "entrar"){

    message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Em qual cargo você deseja integrar ${nick}? \nSelecione conforme os emojis\n🧸 - Ajudante\n📚 - Moderação\n💼 - Administrador\n💻 - Desenvolvedor\n🎓 - Gerência\n👔 - Coordenação\n🛡️ - Direção `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp()).then(msg => {
        msg.react("🧸")
        msg.react("📚")
        msg.react("💼")
        msg.react("💻")
        msg.react("🎓")
        msg.react("👔")
        msg.react("🛡️")
        msg.delete({timeout: 10000})
 
        let f = (reaction, usuario) => reaction.emoji.name === "🧸" && usuario.id === message.author.id;
        let f2 = (reaction, usuario) => reaction.emoji.name === "📚" && usuario.id === message.author.id;
        let f3 = (reaction, usuario) => reaction.emoji.name === "💼" && usuario.id === message.author.id;
        let f4 = (reaction, usuario) => reaction.emoji.name === "💻" && usuario.id === message.author.id;
        let f5 = (reaction, usuario) => reaction.emoji.name === "🎓" && usuario.id === message.author.id;
        let f6 = (reaction, usuario) => reaction.emoji.name === "👔" && usuario.id === message.author.id;
        let f7 = (reaction, usuario) => reaction.emoji.name === "🛡️" && usuario.id === message.author.id;
        let c1 = msg.createReactionCollector(f, {max: 1})
        let c2 = msg.createReactionCollector(f2, {max: 1})
        let c3 = msg.createReactionCollector(f3, {max: 1})
        let c4 = msg.createReactionCollector(f4, {max: 1})
        let c5 = msg.createReactionCollector(f5, {max: 1})
        let c6 = msg.createReactionCollector(f6, {max: 1})
        let c7 = msg.createReactionCollector(f7, {max: 1})
 
        c1.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&737009111018897459> `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "🧸│Ajudante"));
            nick.roles.add(padrãoequipe);       
        })
        c2.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&737009109978841110> `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "📚│Moderação "));
            nick.roles.add(padrãoequipe);       
        })
        c3.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&737009109613936710>  `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "💼│Administração "));
            nick.roles.add(padrãoequipe);       
        })
        c4.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&789882018078261258>  `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "💻│Developer "));
            nick.roles.add(padrãoequipe);       
        })
        c5.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&799970812534587392>  `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "🎓│Gerência "));
            nick.roles.add(padrãoequipe);       
        })
        c6.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&793493107735134218>   `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "👔│Coordenação "));
            nick.roles.add(padrãoequipe);       
        })
        c7.on("collect", cp => {
            cp.remove(message.author.id);
        const msg = canalalt.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setDescription(`⚙️ **Alterações da equipe**\n\nO ${nick} foi integrado a equipe como <@&737009107311132753>  `)
    .setFooter(`©️ ${guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
            nick.roles.add(message.guild.roles.cache.find(r => r.name === "🛡️│Direção "));
            nick.roles.add(padrãoequipe);       
        })
    })


}
}
