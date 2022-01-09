const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`)
 
  let member = message.mentions.members.first()
  if(!member) return message.channel.send("❌ Bir Üye Etiketlemelisin!")
  let isim = args.slice(1).join(" ")
  if(!isim) return message.channel.send("❌ Bir İsim Yazmalısın!")
  
  member.setNickname(`${isim}`)
  
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail(member.user.displayAvatarURL())
    .addField(`**🏷 İsim Değiştirildi 🏷**`, `\n \n**🔸️İsmi Değiştirilen Kullanıcı:** ${member.user} \n🔸️ **Yeni Kullanıcı Adı:** \` ${isim}\``)
    .setFooter(`Kullanan: ${message.author.username}`)
    .setTimestamp()
  message.channel.send(embed)
}

exports.conf = {
  aliases: ["nick", "isim"]
}

exports.help = {
  name: "nick"
}