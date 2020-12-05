const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command");
  
  let pollchannel = message.mentions.channels.first();
  let pollmessage = args.slice(1).join(" ");
  
  
  
  
  if(!pollchannel) {
    const embed1 = new Discord.MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`❎  Please mention the channel first!`)
    return message.channel.send(embed1)
  }
  
  if(!args.slice(1).join(" ")) {
    const embed2 = new Discord.MessageEmbed()
    .setTitle(message.author.username)
    .setDescription(`❎  You did not specify your poll message!`)
    return message.channel.send(embed2)
  }

  
    const embed5 = new Discord.MessageEmbed()
    .setTitle(`Poll started by ${message.author.username}`)
    .setDescription(pollmessage)
  
    const sendEmbed = await pollchannel.send(embed5);
  
    sendEmbed.react("✅")
    sendEmbed.react("❎")
  
  
    message.reply(`✅  Poll created successfully!`)
        
    

}

module.exports.help ={
    name: "ynpoll",
    aliases: []
}
