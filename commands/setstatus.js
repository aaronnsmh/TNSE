  
exports.run = (Discord, client, message, args) => {  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!"); 
client.user.setActivity(args[0], { type: args[1] });
}
