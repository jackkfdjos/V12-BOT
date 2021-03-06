const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');



var prefix = ayarlar.prefix;



exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));

    let rMember = message.mentions.members.first() || args[0]

    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());

    let role = message.mentions.roles.first()



    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());

    let aRole = message.mentions.roles.first()

    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());


    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi! ✅`).setColor('RANDOM'));



};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['rolver', 'rolekle'],

  permLevel: "0"

};



exports.help = {

  name: "rolver",

  description: "Kişilere Rol Yetkisi Verir",

  usage: "rolver <mesaj>"

};