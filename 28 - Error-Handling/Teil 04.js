"use strict"
/*
function DivisionError(message) {
  this.message = message
}

function division(a, b) {
  if (b === 0) {
    throw new DivisionError("FEHLER!")
  }
  return a / b
}
try {
  console.log(division(4, 0))
} catch(e) {
  if (e instanceof DivisionError) {
    console.log("Fehler bei der Division")
  } else {
    throw e
  }
}
*/

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("TEST"), 1000)
})

p.then((data) => {
  throw "FEHLER!"
}).catch((err) => {
  console.log(err)
})