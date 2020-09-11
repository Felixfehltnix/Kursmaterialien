'use strict';

/*
const f = () => {
  let counter = 1

  return () => {
    counter++
    return counter
  }
}
const a = f()
*/

const a = (() => {
  let counter = 1

  return () => {
    counter++
    return counter
  }
})()

console.log("a():", a())
console.log("a():", a())
console.log("a():", a())
console.log("a():", a())
console.log("a():", a())