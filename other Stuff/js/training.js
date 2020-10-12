"use Strict"

const arr = [2, 213, 35, 25, 6324, 7, 234, 51, 6432, 6, 34, 56, 22, 4, 5, 32, 46, 45, 7, 3, 245, 235]
const arr2 = [2, 213, 35, 24215, 6324, 27, 232134, 51, 6432, 63, 34, 56, 22, 43, 54, 326, 426, 45, 7, 3, 245, 235]

const sort = function (arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(sort(arr2))