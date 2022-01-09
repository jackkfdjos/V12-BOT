const Discord = require('discord.js');
const fs = require('fs');


exports.run = async(client, message) => {

let embed = new Discord.MessageEmbed()
.setColor("RED")

.setDescription(`ℹ İnformation: \n
💾 Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2)} MB \n
👤 Kullanıcılar: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} \n
🌐 Sunucular: ${client.guilds.cache.size.toLocaleString()} \n
📝 Kanallar: ${client.channels.cache.size.toLocaleString()} \n
🟢 Nodejs Sürümü: ${process.version} \n
🔵 Discord Sürümü: ${Discord.version} \n
⏱ Ping: ${client.ws.ping}
`)

message.channel.send(embed);

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['info', 'i'],
permLevel: 0
};

exports.help = {
name: 'info',
description: 'Botun istatistiklerini gösterir',
usage: 'info'
};