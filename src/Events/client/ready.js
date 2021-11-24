const Event = require("../../Ana/Event")

module.exports = new Event("ready",async(bot)=>{
    console.log(`${bot.user.username} is ready!`)
})