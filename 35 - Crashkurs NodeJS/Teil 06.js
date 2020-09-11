"use strict"

const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")
const mimeTypes = require("mime-types")

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)
  const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '')
  
  const absolutePath = path.join(__dirname, "public", sanitizePath)
  console.log("absolutePath:", absolutePath)

  fs.exists(absolutePath, (exists) => {
    if (!exists) {
      res.writeHead(404, {
        "Content-Type": "text/plain"
      })
      res.write("404 not found")
      res.end()
      return
    } 
    fs.readFile(absolutePath, (err, content) => {
      if (err) {
        res.writeHead(500, {
          "Content-Type": "text/plain"
        })
        res.write("500 Internal Server Error")
        res.end()
        return
      } 
      res.writeHead(200, {
        "Content-Type": mimeTypes.lookup(sanitizePath)
      })
      res.write(content)
      res.end()
    })
  })
  


  
  return

})

app.listen(8090)