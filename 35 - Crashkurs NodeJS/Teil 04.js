"use strict"

const http = require("http")

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.write("<strong>Startseite!</strong>")
    res.end()
    return
  } else if (req.url === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.write("<strong>Home...!</strong>")
    res.end()
    return
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    })
    res.write("404 not found")
    res.end()
    return
  }

})

app.listen(8090)