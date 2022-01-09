//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###MareFi

const Discord = require("discord.js");

  exports.run = async (client, message, args) => {
  	let kanal =  "925838211622789209"
  	let kanal2 =  "925838211895406632"
  	let mesaj = args.slice(0).join(' ')
  	if (!mesaj) return message.channel.send(`Başvuru mesajınızı yazınız.`).then(x => x.delete({timeout: 3000}))
  	if (message.channel.id !== kanal2) return message.channel.send(` Bu komutu sadece <#${kanal2}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const cmf = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("CodeMareFi Başvuru")
  .setDescription(mesaj)
  .setFooter("Başvuru Sahibi: "+ message.author.tag)
  client.channels.cache.get(kanal2).send(cmf)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["başvuru-yap"],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-yap',
  usage: 'CodeMareFi'
};