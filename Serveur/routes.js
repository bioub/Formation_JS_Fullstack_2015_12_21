'use strict';

module.exports = {
    index: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Index\n');
    },
    coucou: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Coucou\n');
    }
};