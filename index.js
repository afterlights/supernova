const Eris = require("eris");
const dateFormat = require('dateformat');
const Discord = require('discord.js');

const cards = require('./cards')

const client = new Discord.Client();
let prefix = "-";

client.on("ready", () => {
    console.log("Supernova is ready to go!");
    client.user.setActivity('the server', { type: 'WATCHING' });
})

client.on("message", (message) => {

    if(message.author.bot || !message.channel.guild) return;
    if(!message.content.startsWith(prefix)) return;


    if(message.content.toLowerCase().startsWith(`${prefix}drop`)) {
        cards.run(message);

    }

    const {guild, channel} = message;

    let user = message.mentions.users.first() || message.member.user;
    let member = guild.members.cache.get(user.id);

    let serverJoin = new Date(member.joinedAt);

    if(message.content.toLowerCase().startsWith(`${prefix}overview`)) {
        let botInfo = {
            title: `O V E R V I E W` ,
            description: 'An overview of all the commands featured within the bot. To get more details, use the `help` command. If there are further questions, check out the #help and #guides channel of the supernova official server.',
            color: 0x33A7FF,
            thumbnail: {
                url: client.user.displayAvatarURL()
            },
            fields: [
                { name: 'Basic', value: '`overview`‎ ‎`help` `commands`' },
                { name: 'Users', value: '`profile` `userinfo`', inline: true },
                { name: 'Gameplay', value: '`drop` `cd  / t`', inline: true },
            ]
        }

        return message.channel.send({embed: botInfo});
    };

    if(message.content.toLowerCase().startsWith(`${prefix}userinfo`)) {

        let userInfo = {
            title: `S P O T L I G H T : ${user.username}` ,
            description: `A brief look into ${user.username}'s time using supernova.`,
            color: 0x33A7FF, 
            fields: [{
                name: "Joined",
                value: dateFormat(serverJoin, "mmmm dS, yyyy")
            },
            {
                name: "Display Name",
                value: user.nickname || user.username
            }],
            thumbnail: {
                url: user.displayAvatarURL()
            }
        }

        return message.channel.send({embed: userInfo});
    };

    if(message.content.toLowerCase().startsWith(`${prefix}help`)) {

        let helpInfo = {
            title: `H E L P` ,
            description: "A guide of all the gameplay commands and their meaning. The default prefix being used is '.'. If there are further questions, check out the #help and #guides channel of the supernova official server. \n\n `.drop` | displays three cards that are able to be claimed \n `.prbox` | receive a random assortment of cosmetics or cards every week",
            color: 0x33A7FF, 
            thumbnail: {
                url: client.user.displayAvatarURL()
            }
        }

        return message.channel.send({embed: helpInfo});
    };

    if(message.content.toLowerCase().startsWith(`${prefix}rules`)) {

        let rulesInfo = {
            title: `R U L E S` ,
            description: "In order to have a successful and enjoyable experience with the bot, it is important to read all of the rules. If there are further questions, check out the #help channel of the supernova official server. \n\n **01. No Alting | Alting is when one person uses multiple of their own accounts to play the game, which provides an automatic advantage. This behavior will result in the blacklisting of the cheating player.",
            color: 0x33A7FF, 
            thumbnail: {
                url: client.user.displayAvatarURL()
            }
        }

        return message.channel.send({embed: rulesInfo});
    };

});

client.login("");