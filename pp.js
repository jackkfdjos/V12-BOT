const Discord = require('discord.js');
const moment = require('moment');



exports.run = async (client, message, args) => {

  let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

 const avatar = new Discord.MessageEmbed()
        .setColor("RANDOM")
       .setAuthor("» Buyur Avatarın,")
        .setImage(user.avatarURL())
    message.channel.send(avatar)

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
   usage:'!avatar <@kişi-etiket> veya !avatar'
}