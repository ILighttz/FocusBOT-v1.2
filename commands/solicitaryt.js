const Discord = require('discord.js')

exports.run = async (client,message,args) => {
    message.delete();
  var guild = client.guilds.cache.get("730158392307482624");
  let messageArray = message.content.split(" ");
  let canalyt = args[0];
  var categoria = args.slice(1).join(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id

if(cmd.toLowerCase().startsWith("/solicitaryt")){
  if (message.guild.id === "730158392307482624"){
    if (!message.member.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
    if(ChannelID !== "806990130165841961"){
        let embed = new Discord.MessageEmbed()

   .setColor('#8B000')
   .setAuthor(message.author.tag, message.author.displayAvatarURL())
   .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#806990130165841961>`)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp();

  return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
    };
};
}

    if (!canalyt) return message.channel.send(

        new Discord.MessageEmbed()

        .setColor('#8B000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`É preciso informar o link do canal que deseja solicitar a tag ou vincular seu canal ao discord, caso não saiba pergunta a um de nossos ajudantes. /solicitaryt <urlcanal> <YT/MiniYT>`)
        .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
        .setTimestamp()

    ).then(msg => msg.delete({timeout: 10000}));

    if (!canalyt.includes("https://youtube.com/")) return message.channel.send(

        new Discord.MessageEmbed()

        .setColor('#8B000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`É preciso informar um link do canal que deseja solicitar a tag ou vincular seu canal ao discord, caso não saiba pergunta a um de nossos ajudantes. /solicitaryt <urlcanal> <YT/MiniYT>`)
        .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
        .setTimestamp()

    ).then(msg => msg.delete({timeout: 10000}));
    
    if (!categoria) return message.channel.send(
        new Discord.MessageEmbed()

        .setColor('#8B000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`É preciso informar o tipo de tag solicitada (YT/MiniYT). /solicitaryt <urlcanal> <YT/MiniYT>`)
        .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
        .setTimestamp()
    ).then(msg => msg.delete({timeout: 10000}));

    if (!categoria == "YT" || !categoria == "MiniYT") return message.channel.send(
        new Discord.MessageEmbed()

        .setColor('#8B000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`É preciso informar o tipo de tag solicitada (YT/MiniYT). /solicitaryt <urlcanal> <YT/MiniYT>`)
        .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
        .setTimestamp()
    ).then(msg => msg.delete({timeout: 10000}));

    if (categoria == "MiniYT")
        var tagsolicitada = "MiniYT";

         else if (categoria == "YT")
            var tagsolicitada = "YT";
        
        else return message.channel.send(
            new Discord.MessageEmbed()

        .setColor('#8B000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`É preciso informar o tipo de tag solicitada (YT/MiniYT). /solicitaryt <urlcanal> <YT/MiniYT>`)
        .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
        .setTimestamp()
    ).then(msg => msg.delete({timeout: 10000}));


        var player = message.author;
        var canalresp = message.guild.channels.cache.find(ch => ch.id === "808185290953982003");

        message.channel.send(
            new Discord.MessageEmbed()
  
                  .setColor("#7a297a")
                  .setAuthor(message.author.tag, message.author.displayAvatarURL())
                  .setDescription(`Solicitação criada. Aguarde uma resposta em seu privado.`)
                  .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
           
                 .setTimestamp()).then(msg => msg.delete({timeout: 10000}));



        const msg = canalresp.send(
        new Discord.MessageEmbed()

   .setColor('#8B000')
   .setTitle(`**Solicitação de TAG**`) 
   .setDescription(`Canal: ${canalyt}\nTag solicitada: ${tagsolicitada}\n\nAceitei ou neguem o pedido com os respectivos emojis: ✅ e ❌`)
   .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
   .setTimestamp()).then(msg => {
    msg.react("✅")
    msg.react("❌")

    let aceito = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id != client.user.id;
    let recusado = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id != client.user.id;
    let coletor = msg.createReactionCollector(aceito, {max: 1})
    let coletor2 = msg.createReactionCollector(recusado, {max: 1})
    coletor.on("collect", cp => {
    message.author.send(    
new Discord.MessageEmbed()
.setColor("#7a297a")
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setDescription(`A sua solicitação de TAG Youtuber foi aceita. Pode se verificar sua tag no discord.`)
.setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
.setTimestamp());
var guild = client.guilds.cache.get("787531327402016798");
var canalog = guild.channels.cache.find(ch => ch.id === "808184490165403648");

canalog.send(
    new Discord.MessageEmbed()

.setColor('#8B000')
.setTitle(`**Solicitação de TAG**`) 
.setDescription(`Canal: ${canalyt}\nTag atribuida: ${tagsolicitada}\n\n `)
.setFooter(`Atribuido ao ${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp())


let yt = message.guild.roles.cache.find(role => role.name === "Youtuber");
let ytmais = message.guild.roles.cache.find(role => role.name === "Youtuber+");
        if (categoria == "YT"){
            message.member.roles.add(ytmais);
        } else {
            message.member.roles.add(yt);
        }
        msg.delete();
        })
        coletor2.on("collect", cp => {
        message.author.send(    
    new Discord.MessageEmbed()
    .setColor("#7a297a")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(`A sua solicitação de TAG Youtuber foi recusada. Caso atinja todos os requistios, faça uma solicitação novamente.`)
    .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
    .setTimestamp());
    msg.delete();
            })
    })

};
}