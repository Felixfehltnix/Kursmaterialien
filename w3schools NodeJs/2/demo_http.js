"use Strict"

const http = require("http")


const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(`Query String : ${req.url} represents <i style="color: red">the request</i> from the client, as an object (http.IncomingMessage object)`);
    res.end();
})

app.listen(8090)