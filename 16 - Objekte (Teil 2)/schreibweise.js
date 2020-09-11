"use strict"

function runCallback(cb) {
  cb()
}

const data = {
  todos: ["JavaScript lernen", "Node.JS lernen"],
  addTodo(todo) {
    runCallback(() => this.todos.push(todo))
    console.log(this)
  }
  /*
  addTodo: function(todo) {
    runCallback(() => {
      this.todos.push(todo)
    })
  }
  */
}
data.addTodo("Etwas essen")