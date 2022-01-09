const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
exports.run = async(client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl", "memes", "MemeEconomy", "Memes_Of_The_Dank", "dankchristianmemes", "MinecraftMemes", "okbuddyretard", "burdurland"]; //buraya istediğiniz reddit sayfasının ismini yazın
const random = subReddits[Math.floor(Math.random() * subReddits.length)];

const img = await randomPuppy(random);

const embed = new Discord.MessageEmbed()

.setTitle(`Subreddit: /r/${random}`, client.user.avatarURL({ dynamic: true}))
.setColor("RED")
.setImage(img)
.setURL("https://reddit.com/r/${random`}")
.setFooter(`(V) Bot - Meme `, client.user.avatarURL({ dynamic: true}))

message.channel.send(embed);

}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["meme"],
permLevel: 0,
};
exports.help = {
name: 'meme',
description: 'sj'
};