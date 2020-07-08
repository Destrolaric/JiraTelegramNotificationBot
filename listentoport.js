express = require('express');
const http = require('http');
const https = require('https');
const app = express();
const fs = require('fs');
const jsdom = require("jsdom");
const bodyparser = require('body-parser')
const database = require('./database_con')
data=new database.SqlConnection
const request = require('request-promise')
let telid, id;
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.post('*', (req, res) => {

    if ('token' in req.body) {
        //console.log(req.url.split('/')[req.url.split('/').length - 2])
        console.log(telid)
        token = req.body.token.tok;
        request.get(`https://api.trello.com/1/members/me?key=acaa3df416fc4150df0ee5beba9e12d8&token=${token}`,{ json: true },(err,res,body) => {
            id =res.body.id

            request.post(`https://api.trello.com/1/tokens/${token}/webhooks/?key=acaa3df416fc4150df0ee5beba9e12d8&callbackURL=http://91.122.40.21:27020/${id}&idModel=${id}`).then(function (body) {
                console.log(body)
                data.connect()
                data.insertNew(token.toString(),id.toString(),telid.toString())
            })
                .catch(function (err){
                console.log(err);
            })
        })
    }
    res.status(200);


})
app.get('*', (req, res) => {
    telid = req.originalUrl.replace('/', '')
    let file = fs.readFileSync('page.html', () => {
        console.log("error reading")
    })
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(file)
    res.status(200);


})

http.createServer(app).listen(27036, () => {
    console.log('Listening...')
})