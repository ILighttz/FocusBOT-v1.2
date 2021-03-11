const firstMessage = require('./first-message.js')
const Discord = require('discord.js')

module.exports = (client) => {

  var hash = 0;

  const h = `#`;

  const guild = '730158392307482624'

  const channelId = '774798219980177449'

  let array = [];

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
     jogadores: 'Jogadores',
  }

  const reactions = []

 let embed = new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nOlá, jogador. Está precisando de ajuda?\n\nPara conseguir entrar em contato com algum membro da nossa equipe em busca de ajuda, reaja com os respectivos emojis de acordo com o topico do ticket.\n\n<:Dinheiro:787860205621739571> - Compras\n\n<:Youtube:787860161829666828> -  Youtubers\n\n⚔️ - Facções\n\n<:suporte:809541121012662272> - Bugs\n\n<:outros:809541358548156476> - Duvidas\n\n`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`);

  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
  }

  firstMessage(client, channelId, embed, ['<:Dinheiro:787860205621739571>', '<:Youtube:787860161829666828>', '⚔️', '<:suporte:809541121012662272>', '<:outros:809541358548156476>'])

  const handleReaction = (reaction, user, add) => {
    if (user.id === '808872396643237969') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const tipo = emojis[emoji]

    const member = guild.members.cache.find((member) => member.id === user.id)

    let guildstaff = client.guilds.cache.get("787531327402016798");
    let canalog = guildstaff.channels.cache.find(ch => ch.id === "809801197757268000");

  if (add){
      reaction.users.remove(user);
      if (reaction.emoji.id === '787860205621739571'){
        if (array.includes(member)) return;
        let newLength = array.push(member);
        while (guild.channels.cache.find(channel => channel.name === `ticketcompras-${hash}`)){
        hash++;
      }
        var categoryID = '809547861938274336' //categoria do ticket//
        guild.channels.create(`ticketcompras-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketcompras-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketcompras-${hash}`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nProblema:\nCaso necessário, Comprovante:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:allow:780592452007362561>`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)
          ).then(msg => {
    msg.react("<:allow:780592452007362561>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "780592452007362561" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
        return
      }

        for(var i = 0; i < array.length; i++){ 
    
        if (array[i] === member) { 
            array.splice(i, 1); 
        }
    
    }

        member.send(new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )




      })



          
          })
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })



//
//aq é youtubers




      } else if (reaction.emoji.id === '787860161829666828')/*aqui é o ticket de youtubers*/{
        if (array.includes(member)) return;
        let newLength = array.push(member);
        while (guild.channels.cache.find(channel => channel.name === `ticketyoutube-${hash}`)){
        hash++;
      }
        var categoryID = '809548044609126460' //categoria do ticket//
        guild.channels.create(`ticketyoutube-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketyoutube-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketcompras-${hash}`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nProblema/Solicitação:\nCaso necessário, Link do Canal:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:allow:780592452007362561>`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)
          ).then(msg => {
    msg.react("<:allow:780592452007362561>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "780592452007362561" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
        return
      }

      for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }

        member.send(new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })




//ticket de facções :pray:

      } else if (reaction.emoji.name === '⚔️'){

        if (array.includes(member)) return;
        let newLength = array.push(member);

        while (guild.channels.cache.find(channel => channel.name === `ticketfacção-${hash}`)){
        hash++;
      }
        var categoryID = '809548065082048533' //categoria do ticket//
        guild.channels.create(`ticketfacção-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketfacção-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketfacção-${hash}`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nO seu cargo na facção:\nSigla da Facção:\nNome da facção:\nDiscord da facção:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:allow:780592452007362561>`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)
          ).then(msg => {
    msg.react("<:allow:780592452007362561>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "780592452007362561" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
        return
      }

        for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }


        member.send(new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })





//ticket bugs

      } else if (reaction.emoji.id === '809541121012662272'){

        if (array.includes(member)) return;
        let newLength = array.push(member);
        

        while (guild.channels.cache.find(channel => channel.name === `ticketbugs-${hash}`)){
        hash++;
      }
        var categoryID = '809548083130007632' //categoria do ticket//
        guild.channels.create(`ticketbugs-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketbugs-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketbugs-${hash}`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nBug/Problema:\nProva/Print:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:allow:780592452007362561>`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)
          ).then(msg => {
    msg.react("<:allow:780592452007362561>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "780592452007362561" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
        return
      }

      for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }



        member.send(new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })




//ticket duvidas
      } else {
        
        if (array.includes(member)) return;
        let newLength = array.push(member);
        

        while (guild.channels.cache.find(channel => channel.name === `ticketduvidas-${hash}`)){
        hash++;
      }
        var categoryID = '809548098690875392' //categoria do ticket//
        guild.channels.create(`ticketduvidas-${hash}`, {
          type: 'text'
        }).then((channel) => {
          let canalticket = guild.channels.cache.find(channel => channel.name === `ticketduvidas-${hash}`);
         member.send(
              new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi criado com sucesso. Verifique em #ticketduvidas-${hash}`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          );

          canalticket.send(
            new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nOlá, ${member}!\n\nAgradeçemos a criação do seu ticket. Para ajudar com o ticket, por favor siga a instruções de mensagem.\n\nNick:\nDuvida:\n\nPara fechar o ticket, informe a algum membro da equipe para que reaja no emoji abaixo. <:allow:780592452007362561>`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)
          ).then(msg => {
    msg.react("<:allow:780592452007362561>")
            let aceito = (reaction, usuario) => reaction.emoji.id === "780592452007362561" && usuario.id != client.user.id;
            let coletor = msg.createReactionCollector(aceito, {max: 50})
    coletor.on("collect", (reaction, user) => {
      const staff = guild.members.cache.find((member) => member.id === user.id)
      if (!staff.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus")){
        return
      }

      for(var i = 0; i < array.length; i++){ 

        if (array[i] === member) { 
            array.splice(i, 1); 
        }

    }

        member.send(new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`\nO seu ticket foi encerrado com sucesso. Como você avalia o atendimento?\n Use os respectivos emojis\n\n🟢 - Excelente\n🟡 - Regular\n🔴 - Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)     
          ).then(msg => {
          msg.react("🟢")
          msg.react("🟡")
          msg.react("🔴")

          let e = (reaction, usuario) => reaction.emoji.name === "🟢" && usuario.id != client.user.id;
          let r = (reaction, usuario) => reaction.emoji.name === "🟡" && usuario.id != client.user.id;
          let p = (reaction, usuario) => reaction.emoji.name === "🔴" && usuario.id != client.user.id;
          let ecoletor = msg.createReactionCollector(e, {max: 1})
          let rcoletor = msg.createReactionCollector(r, {max: 1})
          let pcoletor = msg.createReactionCollector(p, {max: 1})
      ecoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Excelente`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      rcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Regular`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();

      })

      pcoletor.on("collect", (reaction, user) => {
        canalog.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket - Log <:NetherStart:787860295661387806>`) 
   .setDescription(`Ticket solicitado por: ${user}\nTicket respondido por: ${staff}\n\nAvaliação do atendimento: Pessimo`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )
      msg.delete();
      user.send(
          new Discord.MessageEmbed()

   .setColor("#8B000")
   .setTitle(`<:NetherStart:787860295661387806> Focus ticket <:NetherStart:787860295661387806>`) 
   .setDescription(`Agradeçemos pela avaliação. Isso nos ajudará muito. Caso haja outros problemas/duvidas, basta criar outro ticket.`)
   .setFooter(`©️ Todos os direitos reservados para Rede Focus`)  
      )




      })



          
          }) 
        canalticket.delete();
        msg.delete();
        })
      })














          canalticket.send(`<@&737009111018897459>`).then(msg => msg.delete({timeout: 10}));
          channel.setParent(categoryID)
          let staff = guild.roles.cache.find(r => r.name === "⚔️ │Equipe RedeFocus");
          canalticket.overwritePermissions([
	{
		id: guild.id,
		deny: ['VIEW_CHANNEL'],
	},
	{
		id: member,
		allow: ['VIEW_CHANNEL'],
	},
  {
		id: staff.id,
		allow: ['VIEW_CHANNEL'],
	},
]);
        })
      }
    } else {
      return;
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}