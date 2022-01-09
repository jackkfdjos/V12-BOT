const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const emir = require("../ayarlar.json");
const moment = require("moment")
exports.run = async (client, message, args) => {

////////// BURAYI DOLDURUN
let yetkili = "916408529282273301"
let viplog = "925820180335067167"
let vipRol = "909782129267863606"
////////// BURAYI DOLDURUN
let emiremb = new Discord.MessageEmbed().setFooter("Developed by EmiRR").setColor("RANDOM").setAuthor(message.author.tag,message.author.avatarURL()).setTimestamp()
  if(!message.member.roles.cache.has(yetkili))
  if(!message.member.hasPermission("BAN_MEMBERS")) return  message.react(hata)
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  const kanal = message.guild.channels.cache.find(r => r.id === viplog);
  const kanal1 = message.guild.channels.cache.find(r => r.id === viplog);
  var vip  = message.guild.roles.cache.get(vipRol)
  if(!member) return message.channel.send(emiremb.setDescription(`Komutu doğru kullanmalısın! \`Örnek: ${emir.prefix || ""}vip @Üye/ID`)).then(x => x.delete({timeout: 5000}));
  if(!vip) return
if(!member.roles.cache.get(vip.id)){
  await (member.roles.add(vip.id));
  message.channel.send(emiremb.setDescription(`${member}, kişisine <@&${vip.id}> rolü başarıyla verildi.`)).then(x => x.delete({timeout: 5000}));
  moment.locale("tr")
  let embed1 = new Discord.MessageEmbed().setFooter("Developed by EmiRR").setColor("RANDOM").setAuthor(message.author.tag,message.author.avatarURL()).setTimestamp()
  .setDescription(`${member} (\`${member.id}\`) **Adlı kullanıcıya vip rolü verildi \nRolü veren yetkili : <@!${message.author.id}>\n\nVerdiği tarih : \`(${moment(Date.now()).format("Do MMMM YYYY dddd HH:mm:ss")})\`**`)
  kanal1.send(embed1)
}
  else {
    await (member.roles.remove(vip.id));
    message.channel.send(emiremb.setDescription(`${member}, kişisinden <@&${vip.id}> rolü başarıyla alındı.`)).then(x => x.delete({timeout: 5000}));
    moment.locale("tr")
    let embed = new Discord.MessageEmbed().setFooter("Developed by EmiRR").setColor("RANDOM").setAuthor(message.author.tag,message.author.avatarURL()).setTimestamp()
    .setDescription(`${member} (\`${member.id}\`) **Adlı kullanıcının vip rolü alındı\n\nRolü alan yetkili : <@!${message.author.id}>\n\nAldığı tarih : \`(${moment(Date.now()).format("Do MMMM YYYY dddd HH:mm:ss")})\`**`)
    kanal.send(embed)
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vip',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'vip',
    description: '',
    usage: 'vip [@kullanıcı]'
  };