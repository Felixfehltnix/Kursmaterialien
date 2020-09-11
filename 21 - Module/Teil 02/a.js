"use strict"

const f = () => {
  console.log("Ich bin die a.js")
  const a = 5
  console.log(a + 5)
}

module.exports = f

/*
if (module.parent) {
  console.log("Datei wurde per require eingebunden")
} else {
  console.log("Datei wurde nicht per require eingebunden")
}
*/

// debugger