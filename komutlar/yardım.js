const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
const { MessageButton } = require("discord-buttons")

const prefix = "?"

let buton = new MessageButton()
.setStyle("grey")
.setLabel("Moderasyon ")
.setEmoji("🛠️")
.setID("moderasyon")
let buton1 = new MessageButton()
.setStyle("grey")
.setLabel("Kullanıcı ")
.setEmoji("💎")
.setID("kullanıcı")
let buton2 = new MessageButton()
.setStyle("grey")
.setLabel("Bot ")
.setEmoji("⚙️")
.setID("bot")
let buton3 = new MessageButton()
.setStyle("green")
.setLabel("AnaSayfa")
.setEmoji("🏠")
.setID("anasayfa")

let buton4 = new MessageButton()
.setStyle("red")
.setLabel("Timeout")
.setDisabled(true)
.setID("timeout")

let embed = new MessageEmbed()
.setAuthor(`${client.user.username} Yardım Menüsü`, client.user.avatarURL())
.setDescription(`> Botun komutları hakkında bilgi almak için istediğiniz seçeneğin butonuna tıklayın!`)
.addField("・`🛠️ Moderasyon` ↷",
"> Butonuna tıklayarak **Moderasyon Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`💎 Kullanıcı` ↷",
"> Butonuna tıklayarak **Kullanıcı Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`⚙️ Bot` ↷",
"> Butonuna tıklayarak **Bot Komutları** hakkında bilgi alabilirsiniz.")
.addField("・`🏠 Anasayfa` ↷",
"> Butonuna tıklayarak bu sayfaya geri dönersiniz.")
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

message.channel.send({embed: embed, buttons: [buton, buton1, buton2, buton3]}).then(async msg => {

const filter = x => x.clicker.user.id === message.author.id
let collector = msg.createButtonCollector(filter, { time: 60000})

collector.on("collect", async button => {
if(button.id === "moderasyon") {

let moderasyon = new MessageEmbed()
.setAuthor(`${client.user.username} Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`> Botun moderasyon komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}ban <@üye>** Üyeyi banlarsınız.
**${prefix}kick <@üye>** Üyeyi kicklersiniz.
**${prefix}mute <@üye>** Üyeyi mutelersiniz.

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "🛠️ Moderasyon", embed: moderasyon, buttons: [buton3]})

}

if(button.id === "kullanıcı") {

let kullanıcı = new MessageEmbed()
.setAuthor(`${client.user.username} Kullanıcı Komutları`, client.user.avatarURL())
.setDescription(`> Botun kullanıcı komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}kullanıcıbilgi <@üye>** Üyenin bazı bilgilerine bakarsınız.
**${prefix}sunucubilgi** Sunucu hakkında bilgi alırsınız.
**${prefix}say** Sunucudaki üyelerin sayıları hakkında bilgi alırsınız.

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "💎 Kullanıcı", embed: kullanıcı, buttons: [buton3]})

}

if(button.id === "bot") {

let bot = new MessageEmbed()
.setAuthor(`${client.user.username} Kullanıcı Komutları`, client.user.avatarURL())
.setDescription(`> Botun kullanıcı komutları hakkında bilgi alırsınız!`)
.addField("・Komutlar ↷",
`
**${prefix}eval** Botun sahibi komutları denemesine yarar.
**${prefix}istatistik** Bot hakkında bilgi alırsınız.
**${prefix}reboot** Botun sahibi botu yeniden başlatır.

`)
.setFooter(`${message.author.username} tarafından kullanıldı.`, message.author.displayAvatarURL({dynamic:true}))
.setColor("RANDOM")

msg.edit({content: "⚙️ Bot", embed: bot, buttons: [buton3]})

}

if(button.id === "anasayfa") {

msg.edit({content: ":house: Ana Sayfa", embed: embed, buttons: [buton, buton1, buton2, buton3]})

}

button.reply.defer();
})

collector.on("end", async button => {

msg.edit({content: "Button click Timeout", embed: embed, button: buton4})

        })
    })
};
module.exports.conf = {
  aliases: []
};
module.exports.help = {
  name: "yardım"
};