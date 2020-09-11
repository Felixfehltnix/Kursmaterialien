"use strict"

const http = require("http")

const app = http.createServer((req, res) => {
  console.log("Funktion wurde aufgerufen!")

  
  res.writeHead(404, {
    "Content-Type": "text/html"
  })

  res.write("<strong>Hallo")
  res.write(" ")

  setTimeout(() => {
    res.write("Welt!</strong>")
    res.end()
  }, 5000)

})

app.listen(8090)