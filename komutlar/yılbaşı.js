const Discord = require('discord.js');
const db = require('wio.db')
exports.run = async(client, message, args) => {
let okul = new Date('2020-01-01:00:00')
let zaman = (okul - Date.now())
message.channel.send(`Yılbaşının kutlanmasına **${0}** gün **${7}** saat **${5}** dakika kaldı!`)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yılbaşı',
description: '',
usage: ""
};