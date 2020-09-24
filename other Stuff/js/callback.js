"use strict"


// setTimeout(()=>{
//     console.log("this message is shown after 3 seconds")
// },3000);
//
// document.addEventListener("DOMContentLoaded",()=>{
//
//     const button = document.getElementById("callback-btn");
//
//     button.addEventListener("click",()=>{
//         alert("button clicked");
//     })
//
// })

//===================================================================================================

const students = [
    {name: "Feli", score: 60, school: "East"},
    {name: "Erna", score: 50, school: "West"},
    {name: "Kolli", score: 23, school: "East"},
    {name: "Danger", score: 48, school: "South"},
    {name: "Aang", score: 64, school: "North"},
    {name: "Saitama", score: 100, school: "West"},
    {name: "Choncho", score: 1, school: "East"}
]

//===================================================================================================

const processStudents = function (data, callback){
    for (const i in data){
        if (data[i].school.toLowerCase() === "east" || data[i].school.toLowerCase() === "west"){
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

//===================================================================================================

processStudents(students, (obj)=>{
    if (obj.score >= 50) {
        console.log(obj.name + " passed.");
    }
});

const determineTotal = function () {
    let total = 0;
    let count = 0;
    processStudents(students,(obj)=>{
        total += obj.score;
        count++;
    })
    console.log("Total score: " +total+" - Total Count: " + count);
}

//===================================================================================================

determineTotal();