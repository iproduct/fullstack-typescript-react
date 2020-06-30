import * as http from 'http';
import e = require('express');

const HOSTNAME = '127.0.0.1';
const PORT = 9000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>Hello World from TypeScript:</h2> ${req.rawHeaders.join('<br>')}`);
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening on: http://localhost:${PORT}.`);
});

server.on('error', err => {
    console.error(err);
})