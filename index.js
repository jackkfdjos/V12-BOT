const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const db = require('wio.db')
const moment = require('moment');
require('./util/eventLoader')(client);

client.on('ready', () => {
  console.log(` Aktiff!! ${client.user.tag}!`);
  client.user.setActivity('Duyuru', { type:'PLAYING'})
  .then(presence => console.log('Durum --> $(presence.activitles[0].name) oldu'))
  .catch(console.error);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

//---Bu Kod main'e atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###CMF

client.on('guildMemberAdd', member => {
  // Rol
  let rol = "OTOROL ID" //Verilecek rol ID

  // Sunucuya Giren Kişiye Rol Verme
  member.roles.add(rol)

  // Hg Mesajı
  client.channels.cache.get('HG MESAJ LOG KANAL ID').send(`${member} **Kişisine <@&${rol}> Rolünü Verdim, Hoşgeldin.**`)
})

//---Bu Kod main'e atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###CMF

client.on('guildMemberAdd', member => {
  // Rol
  let rol = "909782129267863604"
})

client.on('message', async message => {
  if (message.content === "sa")
 { message.channel.send(" hg as")    
   }     });

   client.on("ready", () => {
    });

    client.on("message", async message => { 
      if(message.channel.type == "dm"){
      const csl = client.channels.cache.get('DMDEN GELEN LOG ID')
      const cse = new Discord.MessageEmbed()
      .setTitle("Bota Bir DM Geldi")
      .setColor("BLUE")
      .setThumbnail(client.user.avatarURL)
      .setDescription(`**Gönderen Kişi: \`${message.author.tag}\`**`)
      .addField("Gelen Mesaj", "```"+message.content+"```")
      .setTimestamp()
      .setFooter('Code Share DM Logger')
      csl.send(cse)
      }
      })
      
      client.on("message", message => {
        if(message.channel.id !== "SİLİNEN MESAJLAR") return;
        message.delete();
    });

    client.on('message', message => {
      if(message.author == client.user) return;
      const myChan = client.channels.cache.get('OTO İSİM DEĞİŞTİRME KANAL ID');
      if(message.channel != myChan) return;
      if(message.content.length > 32) return;
      message.guild.members.cache.get(message.author.id).setNickname(message.content).catch(() => {
          message.channel.send('İsminizi değiştiremiyorum, sanırım bir hata var lütfen yetkilerimi kontrol edin!');
      });
  });

  client.on('ready', () => {
   [
        "a.yardım",
        "Sunucu",
        "Botu.com",
        "a.yardım Şeklinde Yardım Alınız!."
    ]; //buranın içine istediklerinizi yazacaksınız ve toplamda kaç tane varsa aşağıda 4 olan yere o kadar yazacaksınız
    setInterval(function(){
    }, 5 * 1000); //burda 5 saniyede bir değiştiriyor 5 kısmı kaç saniye olduğunu gösterir isterseniz oynayabilirsiniz(3 saniyeden aşağı yapmayınız)
});

let deletkanal = "SİLİNEN MESAJ KANAL"

client.on("messageDelete", async (message, channel) => {
  if(message.author.bot || message.channel.type === "dm") return;
    if (message.author.bot) return;
    var user = message.author;
    let sChannel2 = message.guild.channels.cache.get(deletkanal)
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setAuthor(`Mesaj silindi.`, message.author.avatarURL())
      .addField("Kullanıcı Tag", message.author.tag, true)
      .addField("Kanal Adı", message.channel.name, true)
      .addField("Silinen Mesaj", "``" + message.content + "``")
      .setThumbnail(message.author.avatarURL())
      .setFooter(`Bilgilendirme  • bügün saat ${message.createdAt.getHours()+3}:${message.createdAt.getMinutes()}`, `${client.user.displayAvatarURL()}`)
      sChannel2.send(embed);
    });

    client.on("message",msg=>{if (msg.content.includes("<@!ETİKET ATINCA DİREK SİLEN MESAJ> ") ) return msg.delete() && msg.channel.send(`Hey! Bu kullanıcıyı etiketlemek yasaktır.`)})

    {
      const csri = "914110080784425020"
      
      const cdb = require("croxydb")
      require("discord-buttons")(client)
      const disbut = require("discord-buttons")
      client.on("clickButton", async button => {
      
      //------------\\
      const evet = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("Evet")
      .setID("Evet");
      const hayır = new disbut.MessageButton()
      .setStyle("red")
      .setLabel("Hayır")
      .setID("Hayır");
      const geriyükle = new disbut.MessageButton()
      .setStyle("green")
      .setLabel("Geri Yükle")
      .setID("GeriYükle");
      const sil = new disbut.MessageButton()
      .setStyle("red")
      .setLabel("Desteği Kapat")
      .setID("DesteğiKapat");
      const kilit = new disbut.MessageButton()
      .setStyle("grey")
      .setLabel("Kapat")
      .setEmoji("🔒")
      .setID("Kilit");
      //------------\\
      
      //------------\\
      let member = button.guild.members.cache.get(button.clicker.user.id)
      let kanal  = button.guild.channels.cache.get(button.channel.id)
      let data   = await cdb.get(`destekkullanıcı_${member.id}`);
      let data2  = await cdb.get(`destekkanal_${kanal.id}`);
      let user   = button.guild.members.cache.get(data2);
      
      //------------\\
      
      //------------\\
      if(button.id === "ticket"){
      if(data) return button.reply.send("> **Başarasız!** Zaten aktif destek talebiniz bulunuyor. **Kanal:** <#" + data +">", true);
      
      button.reply.think(true).then(async a => {
        if(!button.guild.channels.cache.find(c => c.name === "Destek Sistemi")){
      button.guild.channels.create('Destek Sistemi' , {type: 'category'})
        }
        setTimeout(() => {
          const csk = button.guild.channels.cache.find(c => c.name === "Destek Sistemi")
      button.guild.channels.create('destek-' + member.user.username , { type: 'text', reason: 'Destek '+ member.user.tag }).then(async c => {
      c.setParent(csk.id);
      
      await cdb.set(`destekkanal_${c.id}`, member.id);
      await cdb.set(`destekkullanıcı_${member.id}`, c.id);
      
                let role = button.guild.roles.cache.find(a => a.name === '@everyone')      
                await c.createOverwrite(role.id, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                  });
        
                await c.createOverwrite(csri, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                  });
        
                await c.createOverwrite(member.id, {  
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                  })
      
      a.edit("> **Başarılı!** Destek talebiniz oluşturuldu. **Kanal:** <#" + c.id +">")
      await c.send(`${member.user}, Hoş Geldin destek ekibi sizinle ilgilenecektir. \n<@&`+csri+">", kilit)
      })
        }, 2000)
      })
      } else {
      
      
      
      //------------\\
      
      //------------\\
      if(button.id === "Kilit"){
      button.message.edit(`> **Dikkat!** Destek talebini kapatmak istediğine emin misin?`,{
      buttons: [evet, hayır]
      })
      
      button.reply.defer()
      } else {
      //------------\\
      
      //------------\\
      if(button.id === "Evet"){
      
       await kanal.createOverwrite(user, {  
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                  })
      
      await button.message.delete()
      await button.channel.send("> **Kapalı!** <@" + member + `> Tarafından destek talebi kapatıldı.`,{
      buttons: [geriyükle, sil]
      })
      
      await kanal.setName("kapalı-"+ user.user.username)
      
      button.reply.defer()
      } else {
      //------------\\
      
      //------------\\
      if(button.id === "GeriYükle"){
        await await kanal.setName("destek-"+ user.user.username)
                await kanal.createOverwrite(user, {  
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                  })
      
      await button.channel.send("> **Dikkat!** <@" + user + `> Destek talebi tekrar açıldı.`,{
      buttons: [kilit]
      })
      
      await button.message.delete()
      button.reply.defer()
      } else {
      //------------\\
      
      //------------\\
      if(button.id === "DesteğiKapat"){
      await cdb.delete(`destekkanal_${kanal.id}`);
      await cdb.delete(`destekkullanıcı_${user.id}`);
      
      button.channel.delete()
      button.reply.defer()
      } else {
      //------------\\
      
      //------------\\
      if(button.id === "Hayır"){
      button.message.edit("<@" + user + `> Destek ekibimiz seninle ilgilenecek.\n @everyone - @here`,  kilit)
      
      button.reply.defer()
      } else {
      }}}}}
      }
      //------------\\
      
      }); 
      
      client.on("guildMemberRemove", async member => {
      
      //------------\\
      let data   = await cdb.get(`destekkullanıcı_${member.id}`);
      let data2  = await cdb.get(`destekkanal_${data}`);
      let kanal  = member.guild.channels.cache.get(data)
      //------------\\
      
      if(!data) return;
      
      //------------\\
      await cdb.delete(`destekkanal_${data.id}`);
      await cdb.delete(`destekkullanıcı_${member.id}`);
      
      kanal.delete()
      //------------\\
      
      })
      client.on("channelDelete", async channel => {
      
      //------------\\
      let data  = await cdb.get(`destekkanal_${channel.id}`);
      let data2   = await cdb.get(`destekkullanıcı_${data}`);
      //------------\\
      
      if(!data) return;
      
      //------------\\
      await cdb.delete(`destekkanal_${channel.id}`);
      await cdb.delete(`destekkullanıcı_${data}`);
      
      //------------\\
      
      })
      }


//---Bu Kod main'e atıalcaktır atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###CMF

client.on('ready', () => {
  client.channels.cache.get('KANAL İD').join();
})

client.login('Token');
