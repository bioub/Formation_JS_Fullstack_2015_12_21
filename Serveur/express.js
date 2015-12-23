'use strict';

const express = require('express');

const hostname = '127.0.0.1';
const port = 1337;

var app = express();

// Middleware (callback) appelés avant les pages
app.use(function(req, res, next) {
    res.write('Middleware 1<br>');
    next();
});

app.use(function(req, res, next) {
    res.write('Middleware 2 bis<br>');
    next();
});

// Pages
app.get('/', function(req, res, next) {
    res.end('Index');
});

app.get('/coucou', function(req, res, next) {
    res.end('Coucou');
});

// Middleware appelé si aucune page n'a fait de réponse
app.use(function(req, res, next) {
    //res.status(404);
    res.end('Page not found');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});