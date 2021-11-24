/** @format */

const Discord = require("discord.js");

const AnaClient = require("./Ana.Client.js");

/**
 * @template {keyof Discord.ClientEvents} K
 * @param {AnaClient} bot
 * @param {Discord.ClientEvents[K]} eventArgs
 */
function RunFunction(bot, ...eventArgs) {}

/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event {
	/**
	 * @param {K} event
	 * @param {RunFunction<K>} runFunction
	 */
	constructor(event, runFunction) {
		this.event = event;
		this.run = runFunction;
	}
}

module.exports = Event;
