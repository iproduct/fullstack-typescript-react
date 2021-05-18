const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, { 'content-type': 'text/html' })
    const path = url.parse(req.url).pathname;
    res.end(`
    <html>
        <body>
            <h1>Hello from NodeJS!</h1>
            <table border="1">
            <tr>
            <td>Path:</td>
            <td>${path}</td>
            </tr>
            <tr>
            <td>Method:</td>
            <td>${req.method}</td>
            </tr>
            <tr>
            <td>Headers:</td>
            <td>
            <table>
            ${Object.keys(req.headers).map(
                header => 
                '<tr><td>' + header + '</td><td>' + req.headers[header] + '</td></tr>'
            ).join('\n')};
            </table>
            </td>
            </tr>
            </table>
        </body>
    </html>
    `);
});

server.listen(port, hostname, err => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});