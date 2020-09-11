"use strict"

const fs = require("fs")
/*
try {
  const contents = fs.readFileSync("test2.txt", {encoding: "utf-8"})
  console.log(contents)
} catch(e) {
  console.error(e)
}
*/

fs.readFile("test.txt", {encoding: "utf-8"}, (err, contents) => {
  if (err !== null) {
    console.log("Datei wurde nicht gefunden")
    return
  }
  console.log(contents.split(" "))

})