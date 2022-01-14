const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**404!!! Orada dur bakalım. Buna yetkin yok.**")
  
if(!args[0]) return message.reply('rol al @member @role veya rol ver @member @role Yazmalısın!')
if(args[0] === "ver"){
let member = message.mentions.members.first()
if(!member){
member = message.guild.members.get(args[1])
}
const role = message.mentions.roles.first() || message.guild.roles.find(m => m.name === args.slice(2).join(" "))

if(!member) return message.reply('Önce birini etiketle. Sakin Ol')
if(!role) return message.reply('Ben şimdi ne verecem adama? Rol etiketle önce...')
member.roles.add(role)
message.channel.send('Belirttiğin rolü üyeye verdim. Güle güle kullan.')
}
if(args[0] === "al"){
let member = message.mentions.members.first()
if(!member){
member = message.guild.members.get(args[1])
}
const role = message.mentions.roles.first() || message.guild.roles.find(m => m.name === args.slice(2).join(" "))

if(!member) return message.reply('Önce birini etiketle. Sakin Ol')
if(!role) return message.reply('Ben şimdi ne verecem adama? Rol etiketle önce...')
member.roles.remove(role)
message.channel.send('Belirttiğin üyeden rolünü aldım. Bir daha ki sefere dostum.')
}
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "rol"
}