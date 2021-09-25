const { MessageEmbed } = require("discord.js");

module.exports = {
 name: "dice",
 aliases: [],
 description: "Roll a dice",
 category: "Fun",
 usage: "dice",
 run: async (client, message, args) => {
  try {
   const dice = Math.floor(Math.random() * (6 - 1) + 1);
   const embed = new MessageEmbed() // Prettier
    .setTitle(`${client.bot_emojis.game_dice} | The dice rolled \`${dice}\``)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(
     `Requested by ${message.author.username}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    );
   message.reply({ embeds: [embed] });
  } catch (err) {
   console.log(err);
   message.reply({ embeds: [client.command_error_embed] });
  }
 },
};
