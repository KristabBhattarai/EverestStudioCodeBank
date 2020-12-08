const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  
  //For FUN COMMANDS [Delete if not needed]
  
  if(message.content === `.help fun`) {
  const Help1 = new Discord.MessageEmbed()
  .setColor(0x236edf)
  .setTitle('Fun commands of Order It')
  .setDescription('Fun commands')
  return message.channel.send(Help1)
  }
  
  //For MAIN COMMANDS [Delete if not needed]
  
  if(message.content === `.help main`) {
  const Help2 = new Discord.MessageEmbed()
  .setColor(0x236edf)
  .setTitle('Main commands of Order It')
  .setDescription('Main commands')
  return message.channel.send(Help2)
  }
  
  //Copy and paste above embed and edit as you need but put embed name different from other. Each embed, new name.
  
  
  
  //It will work when people say help only
  const HelpEmbed = new Discord.MessageEmbed()
  .setColor(0x236edf)
  .setTitle('Help menu of Order It')
  .setDescription('Detail.')
  message.channel.send(HelpEmbed)

  


}

module.exports.help ={
    name: "help",
    aliases: []
}
