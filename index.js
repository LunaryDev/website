const express = require('express');
const app = express();
const path = require('path');
const port = 1968;
const logSuper = "\nLunary Development"



app.get('/bot', function(req, res) {
    res.sendFile(path.join(__dirname, 'lunarybot.html'));
    });
    app.get('/discord', function(req, res) {
        res.redirect('https://discord.gg/dFY5Ff63zK')
        });
        app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, 'index.html'));
            });




webPort(port)

function webPort(text) {
    app.listen(text)
}

function log(text) {
    console.log(text)
}


log('Started the server at http://localhost:' + port + logSuper)
