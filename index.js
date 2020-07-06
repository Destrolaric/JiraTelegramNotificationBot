var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000;

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

connection.end();
app.use(bodyParser.json());

app.post('/', function (req, res) {
    var body = req.body;
    var trackingNumber = body.msg.tracking_number;
    var slug = body.msg.slug;
    var token = body.msg.unique_token;

    console.log(trackingNumber, slug, token);

    res.json({
        message: 'ok got it!'
    });
});

var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});