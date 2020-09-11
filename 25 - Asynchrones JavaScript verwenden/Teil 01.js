"use strict"

// Beispiel: Gebe einen Countdown aus! 3... 2... 1... Start!
/*
console.log("3...")
setTimeout(() => console.log("2..."), 1000)
setTimeout(() => console.log("1..."), 2000)
setTimeout(() => console.log("Start!"), 3000)
*/

console.log("3...")

setTimeout(() => {
  console.log("2...")
  setTimeout(() => {
    console.log("1...")
    setTimeout(() => {
      console.log("Start!")
    }, 1000)
  }, 1000)
}, 1000)
