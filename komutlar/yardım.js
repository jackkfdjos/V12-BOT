const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

    if(!["935606918733500476"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
    return message.channel.send(new MessageEmbed().setDescription(`yetkin yok moruq.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 4000}));
      

    message.channel.send(new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .addField(`Komutlarımız`, `Şunlardır!!`)
    .addField(`.Ban`, `Bunu Ban Hamer Yetkin Yoksa Kullanmazsınız`, true)
    .addField(`.rol ver`, `Bunu Rol Hamer Yetkin Yoksa Kullanmazsınız`, true)
    .addField(`.sunucu-bilgi`, `Sunucunun Genel Bilgisine Bakarsınız.`, true)
    .addField(`.deprem`, `Nerede Deprem Oldu Haber Verir.`, true)
    .addField(`.havadurumu`, `.Havadurumu Yer.`, true)
    .addField(`.balıktut`, `.Balıktut Sadece Balık Tutarsınız.`, true)
    .addField(`.korona`, `.korona Nerede Korona Var Kaç Vaka VB.`, true)
    .addField(`.Avatar`, `.avatar @etiket`)

    .setFooter('©️ Wasty'))


}
    
    
    exports.conf = { 
        enabled: true, 
        guildOnly: true, 
        aliases: ["yardım", "help", "h", "y"]
        }
        
        exports.help = {
        name: "yardım",
        usage: ".y",
        info: "komutları gösterir"
        }
