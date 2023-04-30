const http = require('http')
http.createServer((req, res) => {
    let endpoint = req.url
    console.log(endpoint)
    if (endpoint == '/home') {
        res.write('welcome to home page')
    }
    else if (endpoint == '/profile') {
        res.write('welcome to profile page')
    }

    res.end()
}).listen(8500);