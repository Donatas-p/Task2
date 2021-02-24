var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    let validIps = ['::1', '127.0.0.1', '78.57.180.189'];

    if(validIps.includes(req.socket.remoteAddress)){
        next();
    } else {
      const err = new Error("Bad IP: " + req.socket.remoteAddress);
      next(err);
    }
})

var routes = require('./api/routes/task2Routes');
routes(app);

app.listen(port);

console.log('Task 2 RESTful API server started on: ' + port);
