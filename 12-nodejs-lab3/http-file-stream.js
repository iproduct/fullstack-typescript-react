var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/page1.html');
    res.writeHead(200, { 'content-type': 'text/html' })
    stream.pipe(res);
});
server.listen(3000);