"use strict"

const printStudentsName = function () {
    console.log(this.lastname + ", " + this.firstname)
}

const students = [
    {
        firstname: "Hansi",
        lastname: "Hunt",
        printName: printStudentsName
    },
    {
        firstname: "Inge",
        lastname: "Borg",
        printName: printStudentsName
    }
]

students[0].printName()
students[1].printName()
