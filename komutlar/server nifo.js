const Discord = require("discord.js");
const moment = require("moment");
moment.locale("en");

exports.run = async (client, message, guild) => {
if (message.author.bot) return;

let Features = {
  ANIMATED_ICON: "Animated icon",
  BANNER: "Banner",
  COMMERCE: "Commerce",
  COMMUNITY: "Community",
  DISCOVERABLE: "Discoverable",
  FEATURABLE: "Featurable",
  INVITE_SPLASH: "Invite splash",
  NEWS: "News",
  PARTNERED: "Partnered",
  VANITY_URL: "Vanity url",
  VERIFIED: "Verified",
  WELCOME_SCREEN_ENABLED: "Welcome screen enabled",
  MEMBER_VERIFICATION_GATE_ENABLED: "Member verification gate enabled",
  VIP_REGIONS: "Vip regions",
  PREVIEW_ENABLED: "Preview enabled"
};

const embed = new Discord.MessageEmbed()
.setColor("#60D1F6")
.setThumbnail(message.guild.iconURL())
.addField(`Owner`, message.guild.members.cache.get(message.guild.ownerID).user.tag, true)
.addField(`VIP Perks`, `${message.guild.features.map(a => Features[a] || a).join(", ") || "None"}`, true)
.addField(`Server Created`, 'Created '+moment(message.guild.createdAt).format("DD/MM/YYYY"), true)
.addField(`Total Roles`, message.guild.roles.cache.size, true)
.addField(`Members`, `${message.guild.memberCount} members,\n ${message.guild.members.cache.filter(m => m.user.presence.status === "online" ).size} online\n ${message.guild.members.cache.filter(m => m.user.bot).size} bots, ${message.guild.members.cache.filter(m => !m.user.bot).size} humans`, true)
.addField(`Total Channels`, `${message.guild.channels.cache.size} total channels:\n ${message.guild.channels.cache.filter(a => a.type == "category").size} categories\n ${message.guild.channels.cache.filter(a => a.type == "text").size} text, ${message.guild.channels.cache.filter(a => a.type == "voice").size} voice`, true)
.addField(`Boost level`, message.guild.premiumTier,true)
.addField(`Number of Boosts`,  message.guild.premiumSubscriptionCount, true)
.setFooter('Server Name: ' + message.guild.name + ' | ServerID:909782129267863603 ' +   message.guild.id )
message.channel.send({ embed })
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "server-info",
    "guildinfo",
    "guild-info"
  ],
  kategori: "server",
  permLevel: 0
};
exports.help = {
  name: "serverinfo",
};