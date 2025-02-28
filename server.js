var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.post("/", function(req,res){
    console.log("I got" + req.body.message);
    res.send(req.body.message);
})

server.listen(3000,function(){
    console.log("we are online");
})