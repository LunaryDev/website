const express = require('express');
const app = express();
const path = require('path');
const port = 3000;




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/code/index.html'));
    });





webPort(port)

function webPort(text) {
    app.listen(text)
}

function log(text) {
    console.log(text)
}


log('Started the server at http://localhost:' + port)
