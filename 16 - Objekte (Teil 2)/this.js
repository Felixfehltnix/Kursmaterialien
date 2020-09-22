"use strict"

// const data = {
//   todos: ["JavaScript lernen", "Node.JS lernen"],
//   addTodo : function(todo) {
//     this.todos.push(todo)
//
//     this.printTodos()
//   },
//   printTodos: function() {
//     console.log(this.todos)
//   }
// }
//
// data.addTodo("3.todo für mein Object")
// data.printTodos()

// console.log(data)

const data = {
  todos: ["return tent", "visit niece"],
  addTodo: function(todo){
    this.todos.push(todo)
    console.log(this.todos)
  }
}

data.addTodo("neues Todo");