var express = require('express');
var bodyParser = require('body-parser');
var server = express();

// Middleware to parse JSON body
server.use(bodyParser.json()); // Handle JSON requests
server.use(bodyParser.urlencoded({ extended: false })); // Handle URL encoded requests

server.post("/", function (req, res) {
    res.send(req.body.message); // Echo back the message
});
 
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
