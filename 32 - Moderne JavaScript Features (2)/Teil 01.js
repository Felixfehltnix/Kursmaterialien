"use strict"


const numbers = [2, 4, 6, 8]


const numbers1 = numbers.map((value, index) => {
    return value * index
})

console.log(numbers1)


const movies = [
    {name: "titanic", pga: "13", releaseYear: "1996"},
    {name: "titanic", pga: "13", releaseYear: "1996"},
    {name: "titanic", pga: "13", releaseYear: "1996"},
    {name: "titanic", pga: "13", releaseYear: "1996"},
    {name: "Toy Story", pga: "15", releaseYear: "2001"}
    ]

// const names1 = (arr)=>{
//     let text = ``
//     for (let i in arr){
//         text += `${i}) name:${arr[i].name}\n`
//     }
//     return console.log(text)
// }
// names1(movies)

const names = movies.map((value, index)=>{
    return `${index}) ${value.name}, ${value.releaseYear}`
})

console.log(names)