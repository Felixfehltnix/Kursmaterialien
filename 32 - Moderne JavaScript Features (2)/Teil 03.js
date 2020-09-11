"use strict"

let numbers = [10, 4, 5, 3, 8, 4]

/*
for(const n of numbers) {
  console.log(n)
}
*/
/*
for(const i in numbers) {
  const n = numbers[i]
  console.log(`${i}: ${n}`)
}
*/
/*
numbers.forEach((n, i) => {
  console.log(`${i}: ${n}`)
})
*/

const f = (n) => {
  console.log(n)
}


numbers.forEach((v, i) => console.log(v, i))

