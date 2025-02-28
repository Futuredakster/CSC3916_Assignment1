var express = require('express');
var bodyParser = require('body-parser');
var server = express();

// Middleware to parse JSON body
server.use(bodyParser.json()); // Handle JSON requests
server.use(bodyParser.urlencoded({ extended: false })); // Handle URL encoded requests

server.post("/", function (req, res) {
    console.log("I got: " + req.body.message);
    res.send(req.body.message); // Echo back the message
});

server.listen(3000, function () {
    console.log("Server is running on port 3000");
});
