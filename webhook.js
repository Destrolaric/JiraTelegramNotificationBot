express = require('express');
const http = require('http');
const app = express();
const bodyparser = require('body-parser')
const database = require('./database_con.js')
const sql = require("mysql2");
TelegramBot = require("node-telegram-bot-api")

BOT_TOKEN = "Some-Token"
bot = new TelegramBot(BOT_TOKEN, {polling: true})
options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Начать', callback_data: 'start_url_giving'}],
        ]
    })
};
bot.onText(/\/start_test/, function (msg) {
    console.log(msg.chat.id)
    bot.sendMessage(msg.chat.id, 'Для того, чтобы начать нажмите кнопку', options).then(r => "yes").catch(r => "No")
});

bot.on('callback_query', function (msg) {
    bot.sendMessage(msg.from.id, `Your Trello Id is https://trello.com/1/authorize?telegram_id=test&expiration=never&name=TrelloBot&scope=read&response_type=token&key=acaa3df416fc4150df0ee5beba9e12d8&callback_method=parameter&return_url=http://91.122.40.21:27036/${msg.from.id}`)
})

data = new database.SqlConnection
connection = sql.createConnection({
    user: 'monty',
    password: 'some_pass',
    server: 'localhost',
    database: 'TEST'
});
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.post('*', async (req, res) => {
    let id = req.originalUrl.replace('/', '')
    console.log(req.body.action.data.text)
    console.log(id)
    let answer;
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    })
    console.log(req.body.text)
    connection.query(`select UserID from Users where TrelloKey="${id}"`, function (err, results, fields) {
        answer = results[0].UserID.replace("\"", "");
        console.log(answer)
        bot.sendMessage(answer, req.body.action.data.text)
    });
    res.status(200);
})
app.get('*', (req, res) => {

})

http.createServer(app).listen(27020, () => {

    console.log('Listening... cht-to')
})
