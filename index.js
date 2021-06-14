require('dotenv').config()
//creating client
const Discord = require('discord.js')
const client = new Discord.Client();
//prefix
const prefix = "!";
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
              messages = message.channel.messages.fetch;
              message.channel.bulkDelete(messages.length+50);
              message.react("👍")
              message.reply('Cleared messages')
                .then(msg => {
                  setTimeout(() => msg.delete(), 3000)
                })
          }
      } catch(e) {
          message.channel.send("Error clearing channel");
          message.react("👎")
          console.log(e);
          
      }
  }
});
client.on("message", message => {
  if(message.content.startsWith('${prefix}ping')){
    message.channel.send("Pong")
  }
});
