const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS!\n');
});

server.listen(port, hostname, err => {
    if(err) {
        console.error(err);
        throw err;
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});