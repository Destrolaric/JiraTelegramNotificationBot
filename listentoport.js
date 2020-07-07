express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const fs = require('fs');
const $ = require('jquery')
// var options={
//     key: fs.readFileSync("key.pem"),
//     cert: fs. readFileSync("sert.pem")
// }
app.get('/', (req, res) => {

    console.log(location.hash)
    res.send('Login is done, you can close the page')
})

http.createServer(app).listen(27036, () => {
    console.log('Listening...')
})