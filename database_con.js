var express = require('express');
var app = express();
var sql = require("mysql2");
class SqlConnection {
     connection = sql.createConnection({
        user: 'monty',
        password: 'some_pass',
        server: 'localhost',
        database: 'TEST'
    });
    connect() {
        this.connection.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            } else {
                console.log("Подключение к серверу MySQL успешно установлено");
            }
        });
    }
    insertNew(token,trelloid,telegramkey) {
        this.connection.query(`INSERT INTO Users (TrelloKey,TrelloToken,UserID) values ("${trelloid}","${token}","${telegramkey}")`)
    }
     findById(id){
         let answer;
         this.connection.query(`select UserID from Users where TrelloKey="${id}"`,function (err,results,fields) {
            answer = JSON.stringify(results);
            console.log(JSON.stringify(results))

        });
         return answer;

    }
}
module.exports.SqlConnection=SqlConnection;
