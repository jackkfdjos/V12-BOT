const Discord = require('discord.js');//ま»Gezgin Qedi ☬#9537

exports.run = async (client, message) => {
    var savasci = [
       "Colt",
       "Nita",
       "Bull",
       "Jessie",
       "Mortis",
       "Gale",
       "Leon",
       "Spike",
       "Sandy",
       "Crow",
       "MR.P",
       "Max",
       "Sprout",
       "Tara",
       "Gene",
       "Surge",
       "Brock",
       "Dynamike",
       "Frank",
       "Piper",
       "Carl",
       "Penny",
       "Darrly",
       "Rico",
       "Rosa",
       "Poco",
       "Barley",
       "El Primo",
       "8-Bit",
       "Tick",
       "Bibi",
       "Bo",
       "Shelly",
       "Pam",
       "Bea",
       "Emz",
       "Jacky",
       "Nani",
       "Shelly",
       "Byron",
       "Lou",
       "Collete",
       "Edgar",
       "Colonel Ruffs"
    ];

    var puan = [//ま»Gezgin Qedi ☬#9537
        "2",
        "3",
        "4",                                               
        "5",
        "6",
        "7",
        "8",
        "9"
        
    ];

    var elmas = [
        "10 Level Rol",
  "20Level Rol",
  "Geçici Süre 1Gün V.I.P",
  "İstediği Kanal Açma",
  "4Evereyone Hakkı",
  "Katagoriylen Kanal Açma",
  "1Hak İsim Değiştirme",
    ];


    var elmas = elmas[Math.floor(Math.random(1) * elmas.length)]
    var puan = puan[Math.floor(Math.random(1) * puan.length)]
    var savasci = savasci[Math.floor(Math.random(1) * savasci.length)]//ま»Gezgin Qedi ☬#9537
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username} adlı kullanıcı bir kutu açtı`)
    .setDescription(`
    **Veeeee kutudan**

    ||***${savasci}***||

    **ve onun için**

    ||***${puan}***||

    **Kazandı**

    **Bonus olarakda**

    ||***${elmas}***||

    **Elmas Kazandı**
    
    `)
    .setFooter(`${message.author.username} adlı kullanıcının kutusu`)
    message.channel.send(embed);//ま»Gezgin Qedi ☬#9537
};

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: ["brawl-stars-kutu-aç"], 
    permLevel: 0
  };
  
  exports.help = {
    name: "kutuaç",
    description: 'Brawl stars oyununda kutu açarsınız',
    usage: "kutuaç"//ま»Gezgin Qedi ☬#9537
  };