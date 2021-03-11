
const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos
const ticket = require('./ticket/ticket.js');

client.on('message', async message => {
	const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
	if (message.channel.id !== "787725287269859338")
	if (regex.exec(message.content)) {
		await message.delete({ timeout: 1000 });
		await message.channel.send(
			new Discord.MessageEmbed()
				.setColor('#8B000')
				.setDescription(
					`${
						message.author
					}, É proibido enviar convites de outros Discord's neste servidor.`
				)
		);
	}
});

client.on('message', async message => {
  
  if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        return message.channel.send(
    new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.displayAvatarURL())
   .setColor('#8B000')
   .setDescription(`Olá, precisa de ajuda?\nEu posso te ajudar! Basta digitar /ajuda em <#806990130165841961> e te informarei tudo que precisará para começar, caso não seja suficiente contate algum membro de nossa equipe!`)
   .setFooter(`©️ ${message.guild.name}`, client.user.displayAvatarURL())
   .setTimestamp()
    ).then(msg => msg.delete({timeout: 40000}));
    };
});





client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix)) return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});

client.on('nitroBoost', booster => {
	bot.channels
		.get('806988747387568158')
		.send(`:boostdk4: | ${booster} acabou de impulsionar a Rede Focus! Abra um ticket em #ticket para usufruir dos seus benefícios. Obrigada por ajudar :heart:`);
	booster.addRole(booster.guild.roles.find(a => a.name === '💠│Focus Boost'));
});

client.on('ready', () => {
   let activities = [
            `O meu prefix é "/"`,
            `em redefocus.com.br`, {
                type: 'PLAYING'
            },
            `lojaredefocus.com.br (em manutenção)`, {
                type: 'WATCHING'
            },
            "?", {
             type:"STREAMING",
            url: ""
      },
        ],
        i = 0;
     setInterval(
        () =>
            client.user.setActivity(`em redefocus.com.br`, {
                type: 'PLAYING'
            }),
        5000
    );
    setInterval(
        () =>
            client.user.setActivity(`meu prefix é "/"`, {
                type: 'LISTENING'
            }),
        5000
    );
      setInterval(
        () =>
            client.user.setActivity("?", {
             type:"STREAMING",
            url: "https://www.twitch.tv/ilighttzz"
      }),
        5000
    );
    setInterval(
        () =>
            client.user.setActivity(`lojaredefocus.com.br (em manutenção)`, {
                type: 'WATCHING'
            }),
        5000
    );
	client.user.setStatus('online').catch(console.error);
	console.log(
		`O ${
			client.user.username
		} foi iniciado com sucesso. Desenvolvido por ILighttz#9166`
	);
  ticket(client);
});

client.login(config.token); //Ligando o Bot caso ele consiga acessar o token





