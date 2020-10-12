"use Strict"

const http = require("http")
const url = require("url")


const app = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"})
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt)
})

app.listen(8090)