const ms = require("ms")

const AnaClient = require("./Ana/Ana.Client")
bot = new AnaClient()

bot.start(bot.config.token)