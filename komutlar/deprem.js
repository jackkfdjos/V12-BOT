const sebastian = require("axios");
const { MessageEmbed } = require('discord.js');
//Developed by Sebastian ⌔#0019
exports.run = async (client, message, args) => {
  try {
    const sebastianveri = await sebastian.get("https://api.orhanaydogdu.com.tr/deprem/live.php");
    const sondepremsebastian = sebastianveri.data.result[0];
    //Developed by Sebastian ⌔#0019
    const sebastianembed = new MessageEmbed()
    .setAuthor(`${client.user.username} - Deprem Sistemi`, client.user.avatarURL())
    .setColor("RANDOM")
    .setTitle(`Deprem Yeri: ${sondepremsebastian.lokasyon}`)
    .setDescription(`
    **Deprem Zamanı:** **<t:${sondepremsebastian.timestamp}:f>**
  
    **Deprem Şiddeti:** \`${sondepremsebastian.mag}\`
  
    **Deprem Derinliği:** \`${sondepremsebastian.depth}km\`
  
    **Deprem Koordinatları:** \`${sondepremsebastian.coordinates}\`
    `)
    .setFooter(`${message.author.tag} Tarafından istendi\nDeveloped by Sebastian ⌔#0019`, message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    message.channel.send(sebastianembed)
  } catch (error) {
      message.channel.send('Bir hata ile karşılaşıldı lütfen konsola bakın!')
      console.log(error)
      //Developed by Sebastian ⌔#0019
  }
//Developed by Sebastian ⌔#0019
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["deprem", "earthquake"],
    permLevel: 0,
 };
 exports.help = {
     name: "deprem",
     description: "Türkiye'de olan en son deprem hakkında gelişmiş bilgi verir **V12** uyumludur!"
 }