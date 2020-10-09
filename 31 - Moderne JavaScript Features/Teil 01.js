"use strict"

// const name = "Max"
//
// console.log("Hallo " + name + "!")
// console.log('Hallo ' + name + '!')
//
// console.log(`Hallo ` + name + `!`)
// console.log(`Hallo ${name}: ${name.length + 5}!`)


let arr = [23, 43, 245, 23, 764, 54, 3, 56, 2, 43, 67, 12, 432, 44]

const bubbleSort = (arr) => {
    let temp
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {              // for every loop look at j and swap if j is smaller than j+1(arr[1])
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))

