"use strict"

const http = require("http")

const app = http.createServer((req, res) => {
  console.log("Funktion wurde aufgerufen!")

  res.write("Hallo")
  res.write(" ")

  setTimeout(() => {
    res.write("Welt!")
    res.end()
  }, 5000)

})

app.listen(8090)