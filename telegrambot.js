const fetch = require('node-fetch');
const telegram = require("telegraf")
const BOT_TOKEN = "1130280057:AAGs3BwpLBIN7KvJyIfTxRn60HTT6kSWkjo"

class TelegramTrelloBot {
    bot
        connect() {
            bot = new Telegraf(BOT_TOKEN)
            this.bot.start((ctx) => ctx.reply("Welcome"))
        }

        message (msg) {
            this.bot.message("")
        }
        
    }

module.exports.Telegrambot = TelegramTrelloBot;