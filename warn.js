const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  
   if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command");

     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

     if(!user) return message.channel.send('You did not mention a user.');

     if(!args.slice(1).join(" ")) return message.channel.send("You did not specify your message");
  
    const dmembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${user.user.tag}`)
    .setDescription("edit this embed as u need!!")
    .addField(`Reason :` , "**" + args.slice(1).join(" ") + "**" )


     user.user.send(dmembed)
     .catch(() => message.channel.send("That user could not be DMed"))
     .then(() => message.channel.send(`Sent a message to ${user.user.tag}`))
  
  
    const modlogembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${user.user.tag} got warned!`)
    .setDescription("Mod :" + message.author.tag)
    .addField(`Reason :` , "**" + args.slice(1).join(" ") + "**" )
    
  
            
            const data = message.guild.channels.cache.find(ch => ch.name.toLowerCase() == 'mod-log' && ch.type == 'text');
  
            if(!data) {
      
              
              const errormsg = await message.reply("``` Error: Can't find 'mod-log' channel in this server! ```");
  
              errormsg.delete({ timeout: 10000 })
            }
  
            data.send(modlogembed)
       
}
  



module.exports.help ={
    name: "warn",
    aliases: []
}
