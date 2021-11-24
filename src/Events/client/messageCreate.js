const Event = require("../../Ana/Event")

module.exports = new Event("messageCreate",async(bot,message)=>{
    if(message.author.bot || !message.guild)return;

    if(!message.content.startsWith(bot.config.prefix)) return;
    const args = message.content.substring(bot.config.prefix.length).split(/ +/)

    const command = bot.commands.get(args[0]) || bot.aliases.get(args[1])
    if(!command) return message.reply(`\`${args[0]}\` is not a valid command!`)

    command.run(bot,message,args)
})