'use strict';

let number = 5
const f = () => {
  console.log("number:", number)
}
number = 6

const a = () => {
  let number = 7
  // number = 7 

  f()
}
a()

