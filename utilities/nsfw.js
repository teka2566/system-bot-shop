const Discord = require("discord.js");

const nsfwembed = new Discord.MessageEmbed()
 .setColor("#FF5757")
 .setDescription("💢 | You can use this command only in an NSFW Channel!")
 .setFooter("Requested by " + message.author.username, message.author.displayAvatarURL())
 .setImage("https://media.discordapp.net/attachments/721019707607482409/855827123616481300/nsfw.gif")

