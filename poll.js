// This command requires the discord-js package to create embeds
const Discord = require('discord.js');
const { prefix } = require('../config.json');

const options = [
    '🇦',
    '🇧',
    '🇨',
    '🇩',
    '🇪',
    '🇫',
    '🇬',
    '🇭',
    '🇮',
    '🇯',
    '🇰',
    '🇱',
    '🇲',
    '🇳',
    '🇴',
    '🇵',
    '🇶',
    '🇷',
    '🇸',
    '🇹',
    '🇺',
    '🇻',
    '🇼',
    '🇽',
    '🇾',
    '🇿',
  ];

exports.run = async (client, message, args, tools) => {

    let user;

    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
         user = message.author;
     }

    // Role Verification (Optional)
    if (!message.member.roles.find(r => r.name === 'owner')) return message.channel.send('This requires the role: roleName');

    // Permission Verification (Optional)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMINISTRATOR');

    const how = new Discord.RichEmbed()
        
        .setColor('#007f47')
        .setTitle('Comment faire un sondage :')
        .setDescription("**Question à choix multiples (1-10)** \n"
        + prefix + 'poll' + ' "' + "Quelle est votre couleur préférée ?" + '" ' + '"Bleu" ' + '"Rouge" ' + '"Jaune"' + "\n **Oui / Non / Pas d'avis** \n"
        + prefix + 'poll "Do you like strawberries ?"')
        .setFooter('')
    
    if (!args[0]) return message.channel.send(how);
    
    const embed = new Discord.RichEmbed()
        .setColor('#007f47')
        .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/attachments/564470395437056010/573576244881391629/GardenLogo_v3_16.png')
        .setDescription("*" + args.join(' ') + "*")
        .setFooter('Réagissez pour voter.')

    let msg = await message.channel.send(embed);

    await msg.react('👍'); 
    await msg.react('👎');
    await msg.react('🤷');
    
    else if { // multiple choice
        args = args.map(a => a.replace(/"/g, ''));
        const question = args[0];
        const questionOptions = [...new Set(args.slice(1))];
        if (questionOptions.length > 20) {
          return message.channel.send(`${message.author} Polls are limited to 20 options.`);
        } else {
          pollLog[message.author.id] = {
            lastPoll: Date.now()
          };
          return message
            .channel
            .send(`${message.author} asks: ${question}
${questionOptions
    .map((option, i) => `${options[i]} - ${option}`).join('\n')}
`)
            .then(async (pollMessage) => {
              for (let i = 0; i < questionOptions.length; i++) {
                await pollMessage.react(options[i]);
              }
            });
        }
      }
    }


    message.delete({timeout: 1000}); // This waits 1000 milliseconds before deleting (1 second)

} 
