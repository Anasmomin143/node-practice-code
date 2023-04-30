const http = require('http');
http.createServer((req, res) => {
    res.write('hello my anas is anas')
    res.end()
}).listen(5200)