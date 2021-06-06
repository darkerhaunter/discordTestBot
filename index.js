require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN)
client.on("ready", () => {
  console.log("Bot has logged in and is ready")
  })
  client.on("message", msg => {
    if (msg.content === "hey" || msg.content === "hello" || msg.content === "hi") {
    msg.reply("hello friend")
    }
    else if(msg.content == "pog"){
      msg.react("❤️")
    }
    })
    client.on("messageDelete", msg => {
      msg.reply("stop deleting messages dude!!");
      })