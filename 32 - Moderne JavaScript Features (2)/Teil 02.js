"use strict"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const number2 = numbers.filter((value) => {
  if (value % 2 === 0) return true
  else return false
})
*/

const number2 = numbers
    .filter((v) => {
        return  v % 2 === 0
    })
    .map(v => v - 1)

console.log(number2)


const movies = [
    {name: "titanic", pg: "13", releaseYear: "1996"},
    {name: "titanic1", pg: "13", releaseYear: "1996"},
    {name: "titanic2", pg: "13", releaseYear: "1996"},
    {name: "titanic3", pg: "13", releaseYear: "1996"},
]


const name = movies.map((value, index) =>`${index}) ${value.name}`)

console.log(name)