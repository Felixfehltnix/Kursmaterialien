"use Strict"

const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    fs.readFile("demofile1.html", (err, data) => {
        if (!err && req.url === "/") {
            res.writeHead(200, {"content-type": "text/html"})
            res.write(data)
            res.end()
        } else {
            res.writeHead(404, {"content-type": "text/pain"})
            res.end(`404 not found`)
        }
    })
})
app.listen(8090)