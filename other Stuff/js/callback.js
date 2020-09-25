"use strict"



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
    for (const entry of data){
        if (entry.school.toLowerCase() === "east" || entry.school.toLowerCase() === "west"){
            if (typeof callback === "function") {
                callback(entry);
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