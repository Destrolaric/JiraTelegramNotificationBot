var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);

module.exports= {
    connect: function(){
        connection.connect();
    },
    select: function (){
    connection.select()
    },

}