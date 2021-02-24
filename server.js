var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/task2Routes');
routes(app);

app.listen(port);

console.log('Task 2 RESTful API server started on: ' + port);
