var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT;
    app.use(bodyParser.json());
module.exports= {
   startListening: function () {


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
   } 
}
