const Discord = require("discord.js")
, fs = require("fs")
, config = require("../config.json")
, Event = require("./Event")
class AnaClient extends Discord.Client{
    constructor(){
        super({intents: 32767})

        this.commands = new Discord.Collection()
        this.aliases = new Discord.Collection()
        this.config = config;
    }
    start(token){
        if(!token) return console.error(`[ERROR]: You must give the token`)
        this.initCommands()
        this.initEvents()
        this.login(token)
    }d

    initCommands(){
        let counter = 0;
        const subFolder = fs.readdirSync("./src/commands")
        for(const category of subFolder){
            const commandsFiles = fs.readdirSync(`./src/commands/${category}`)
            for(const commandFile of commandsFiles){
                const command = require(`../commands/${category}/${commandFile}`)
                if(this.commands.has(command.name)) return console.warn(`[ERROR CMDS]: The command name ${command.name} has already been loaded`)
                this.commands.set(command.name,command)
                if(command.aliases && command.aliases.length > 0) {
                    command.aliases.forEach(alias => this.aliases.set(alias, command))
                }
                counter++
            }
        }
        console.log(`[CMDS]: ${counter}`)
    }

    initEvents(){
        let counter = 0;
        const subFolder = fs.readdirSync("./src/events")
        for(const category of subFolder){
         const eventsFiles = fs.readdirSync(`./src/events/${category}`).filter(f => f.endsWith(".js"))
         for(const eventFile of eventsFiles){
             const event = require(`../events/${category}/${eventFile}`)
             /**
              * @type {Event}
              */
              this.on(event.event, event.run.bind(null, this));

             counter++
         }
        }
        console.log(`[EVENTS]: ${counter}`)
    }
}

module.exports = AnaClient;