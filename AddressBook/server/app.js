'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('./models/contact');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json()); // créé req.body

// Convention d'URL : RESTful
// list : GET /
// add : POST /
// show : GET /123
// modify : POST /123 ou PUT /123
// delete : DELETE /123

// ajout un préfix : /api/v1/contacts
// list
app.get('/api/v1/contacts', function(req, res, next) {

});
// add
app.post('/api/v1/contacts', function(req, res, next) {

    var contact = req.body;
    contact._id = 123;

    res.status(201);
    res.json(contact);
});
// show
app.get('/api/v1/contacts/:id', function(req, res, next) {
    var id = req.params.id;

    res.json({
        _id: id,
        prenom: 'Jean',
        nom: 'Dupont'
    });
});
// modify
app.post('/api/v1/contacts/:id', function(req, res, next) {

});
// delete
app.delete('/api/v1/contacts/:id', function(req, res, next) {

});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});