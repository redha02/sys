const Discord = require("discord.js");
const MooDY = new Discord.Client();
MooDY.on('ready', () => {
  MooDY.user.setGame(`By Ethaaan`,'https://www.twitch.tv/esl_csgo');
  console.log("["+MooDY.user.username+"] Online now !!");
});
MooDY.login("NjAyOTU5OTkxNTM5ODkyMjQz.XTc9dQ.p2MaWYBs_qLjaAY8Ob9bgPrr27A"); // <= Your token here !!