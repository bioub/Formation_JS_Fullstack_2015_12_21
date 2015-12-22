// Module
// objectif : limiter les identifiants globaux
// En général en utilisant un fonction anonyme

// Dans cet exemple :
// Design Pattern IIFE Immediatly Invoked Function Expression

(function () {
    'use strict';

    // function declaration
    function addition(nb1, nb2) {
        return Number(nb1) + Number(nb2);
    }

    console.log(addition(1, 2));
    console.log(addition('1', '2'));

    // function expression
    var addition = function(nb1, nb2) {
        return Number(nb1) + Number(nb2);
    };

    console.log(addition(2, 3));

    // named-function expression
    var addition = function addition(nb1, nb2) {
        return Number(nb1) + Number(nb2);
    };

    console.log(addition(3, 4));

    // Fonctions de rappels / Callback
    setTimeout(function () {
        console.log('appel dans 4 sec');
        clearInterval(id);
    }, 4000);

    var id = setInterval(function () {
        console.log('appel toutes les 1 sec');
    }, 1000);


    var addition = function (nb1, nb2) {
        if (typeof nb1 === 'undefined') {
            throw new Error('nb1 est obligatoire');
        }

        nb2 = nb2 || 0;

        var somme = Number(nb1) + Number(nb2);

        for (var i=2; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    };

    console.log(addition(1, 2, 3)); // 6
    console.log(addition(1, 2)); // 3
    console.log(addition(1)); // 1
    try {
        console.log(addition()); // error
    }
    catch (e) {
        console.error(e.message);
    }


    var addition = function (nb1, nb2) {

        function somme() {
            return Number(nb1) + Number(nb2);
        }

        return somme();
    };

    console.log(addition(10, 5));

    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    function closure(i) {
        // portée de closure (sauvegardé lors
        // de l'appel à la fonction externe)
        return function() {
            console.log(i);
        };
    }

    for (var i=0; i<3; i++) {
        setTimeout(closure(i), 1000);
    }
}());