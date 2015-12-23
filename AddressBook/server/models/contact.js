var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    prenom:  { type: String, required: true },
    nom: { type: String, required: true },
    email:   String,
    telephone: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('contacts', contactSchema);