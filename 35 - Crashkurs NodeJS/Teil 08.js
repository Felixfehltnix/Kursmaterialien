"use strict"

const http = require("http")
const url = require("url")

const servePublic = require("./public")

const obj = {
  firstname: "Max",
  lastname: "Mustermann"
}

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)

  if (parsedUrl.pathname.substr(0, 8) === "/public/") {
    return servePublic(parsedUrl, res)
  }

  if (req.url === "/student.json") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.write(JSON.stringify(obj))
    res.end()
    return
  }

  res.writeHead(200, {
    "Content-Type": "text/html"
  })
  res.write("<h1>Keine Datei wird ausgeliefert!</h1>")
  res.end()
  
  return

})

app.listen(8090)