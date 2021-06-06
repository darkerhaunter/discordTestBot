require('dotenv').config()
//creating client
const Discord = require('discord.js')
const client = new Discord.Client();
//deploying bot
client.login(process.env.BOT_TOKEN)
client.on("ready", () => {
  console.log("Bot has logged in and is ready")
})

//commands
//on message
client.on('message', function(message) {
  if (message.content == "!clear") {
      try {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
              messages = message.channel.fetchMessages();
              message.channel.bulkDelete(messages);
              message.react("👍")
          }
      } catch(e) {
          message.channel.send("Error clearing channel");
          message.react("👎")
          console.log(e);
          
      }
  }
});
