(function() {
    'use strict';

    var horloge = document.querySelector('#horloge');

    function afficherDate() {
        horloge.innerHTML = moment().format('hh:mm:ss');
    }

    setInterval(afficherDate, 1000);
    afficherDate();
}());