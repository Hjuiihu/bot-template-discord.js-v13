const Discord = require("discord.js")
, AnaClient = require("./Ana.Client")
/**
 * @param {AnaClient} bot
 * @param {Discord.Message} message
 * @param {String[]} args
 */
function RunFunction(bot,message,args) {}
class Command {
    /**
     * @typedef {{name: string,description:string,category: string, aliases: array,run: RunFunction}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options){
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.aliases = options.aliases;

        this.run = options.run;
    }
}

module.exports = Command;