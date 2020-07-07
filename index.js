const webhook = require('./webhook');
const databaseconnection = require('./database_con');
const telegram = require('./telegrambot');

let bot = new telegram.Telegrambot
bot.connect()
webhook.startListening();
databaseconnection.connect()
