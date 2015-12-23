'use strict';

const http = require('http');
const routes = require('./routes');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            routes.index(req, res);
            break;
        case '/coucou':
            routes.coucou(req, res);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found\n');
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});