"use Strict"

const http = require("http")
const {myDateTime} = require("./myfirstmodule")

http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('the current time and date are ' + myDateTime())
}).listen(8090)