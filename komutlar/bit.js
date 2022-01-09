const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
const crypto = require('crypto-global')
unit = args[0]
if (!unit) return message.channel.send("Lütfen bir crypto para belirtiniz. \`!crypto bitcoin\`")
let all = await crypto.all(unit)
 
const embed = new Discord.MessageEmbed()
.setColor('#BLUE')
.setThumbnail(all.icon)
.setAuthor(all.name)
.addField('Fiyat (TRY)', `\`${all.try}\``)
.addField('Fiyat (USD)', `\`${all.usd}\``)
.addField('24 Saatlik Hacim', `\`${all.vol24}\``)
.addField('Aktif Hacim', `\`${all.market}\``)
.addField('1 yılın en düşük değeri', `\`${all.lower}\``)
.addField('1 yılın en yüksek değeri', `\`${all.higher}\``)
.addField('Anlık Yüzdelik Değeri', `\`${all.percent}\``)
.setImage(all.table)
message.channel.send(embed)
 
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'crypto',
 description: '',
 usage: 'crypto'
};