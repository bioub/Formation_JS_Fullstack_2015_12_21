'use strict';

// 1 - Manipuler des objets existants
console.log('coucou');
Math.random();

// 2 - Instancier des fonctions constructeurs
// existantes

console.log(typeof Date);
var now = new Date();
console.log(now.getYear()); // 115
// pour gérer les dates utiliser moment.js

// 3 - Utiliser les syntaxes litérales

var str = 'coucou'; // new String
var tab = []; // new Array
var regexp = /[a-z]/; // new RegExp

var obj = {}; // new Object
var contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz'
};
contact.age = 30;
contact.hello = function() {
    return 'Je suis ' + this.prenom;
};

console.log(contact.hello());

var json = JSON.stringify(contact);
console.log(json);
var objetContact = JSON.parse(json);
console.log(objetContact.prenom);

Object.preventExtensions(contact);
// contact.ville = 'Paris';
// console.log(contact.ville);

// 4 - Créer des "classes" avec des fonctions
// constructeur

function Contact(prenom) {
    this.prenom = prenom;
}

Contact.prototype.hello = function() {
    return 'Je suis ' + this.prenom;
};

var contact = new Contact('Romain');
console.log(contact.prenom); // prenom dans contact
console.log(contact.hello()); // hello dans Contact.prototype
console.log(contact.hasOwnProperty('titi')); // hasOwnProperty dans Object.prototype