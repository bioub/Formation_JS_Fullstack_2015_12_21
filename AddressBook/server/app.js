'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Contact = require('./models/contact');
const path = require('path');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const mongoUrl = 'mongodb://localhost/addressbook';

mongoose.connect(mongoUrl);

var app = express();
app.use(bodyParser.json()); // créé req.body

app.use(express.static(path.join(__dirname, '..', 'client')));

function serveIndex(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
}

app.get('/contact/ajouter', serveIndex);
app.get('/contact/:id', serveIndex);
app.get('/contact/:id/modifier', serveIndex);
app.get('/contact/:id/supprimer', serveIndex);

// Convention d'URL : RESTful
// list : GET /
// add : POST /
// show : GET /123
// modify : POST /123 ou PUT /123
// delete : DELETE /123

// ajout un préfix : /api/v1/contacts
// list
app.get('/api/v1/contacts', function(req, res, next) {
    Contact.find({}, 'prenom nom', function (err, contacts) {
        if (err) return next(err);
        res.json(contacts);
    })
});
// add
app.post('/api/v1/contacts', function(req, res, next) {
    var contact = new Contact(req.body);

    contact.save(function(err, contact) {
        if (err) return next(err);
        res.status(201);
        res.json(contact);
    });
});
// show

app.get('/api/v1/contacts/:id', function(req, res, next) {
    var id = req.params.id;

    Contact.findById(id, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    })
});
// modify
app.post('/api/v1/contacts/:id', function(req, res, next) {

});
// delete
app.delete('/api/v1/contacts/:id', function(req, res, next) {

});

app.use(function(err, req, res, next) {
    res.status(500);
    res.json({error: err});
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});