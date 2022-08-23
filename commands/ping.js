const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Botun Geçikmesini Gösterir"),
    run: async (client, interaction) => {
      interaction.reply(`**Botun Geçikmesi** \`${client.ws.ping}\``)
     }
 };