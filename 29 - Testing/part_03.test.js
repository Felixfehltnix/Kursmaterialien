"use Strict"

const {addStudent, students} = require("./part_03");

beforeEach(()=>{
    students.splice(0, students.length)
    students.push("felix becker")
})

test("Student should be added to Array", ()=>{
    addStudent("felix")
    expect(students.length).toBe(2)
    expect(students).toContain("felix")
})


test("It should not add a student if students exists already", ()=>{
    addStudent("felix becker")
    expect(students.length).toBe(1)
})