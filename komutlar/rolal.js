const Discord = require("discord.js")

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("⚠ **Uyarı** ⚠", "`rol-al` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**")
    return message.author.sendEmbed(ozelmesajuyari)
  }
  
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!")

  
  let user = message.mentions.members.first();
  if (!user) return message.reply("**⚠ Rolünü Almak İstediğin Kişiyi Yazmalısın!**")
  
  let rol = message.mentions.roles.first();
  if (!rol) return message.reply("**⚠ Bir Rol Yazmalısın!**");

  user.roles.remove(rol);
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(`✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Alındı!`)
    .setFooter("Owner Bot")
  message.channel.send(embed)
}

exports.conf = {
  aliases: ["rolal", "rl"]
}

exports.help = {
  name: "rol-al"
};