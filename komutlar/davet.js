const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
    const embed = new Discord.MessageEmbed()
  .setTitle(`${client.user.username}`)
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("BLUE")
  .setFooter(`© ${client.user.username}` , client.user.avatarURL)
  .setThumbnail("")
  .setDescription('**Discord Sınırsız Link.!!**(https://discord.gg/wXMCEXfXRd)')
  .setTimestamp()
  .addField("Davet Linki.", `[Destek Sunucusu](https://discord.gg/wXMCEXfXRd)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=665525292873547816&scope=bot&permissions=2080374975')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};