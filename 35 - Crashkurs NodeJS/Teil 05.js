"use strict"

const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)
  const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '')
  
  const absolutePath = path.join(__dirname, "public", sanitizePath)
  const content = fs.readFileSync(absolutePath)

  res.writeHead(200, {
    "Content-Type": "image/jpeg"
  })
  res.write(content)
  res.end()
  return

  // fs.readFile()

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