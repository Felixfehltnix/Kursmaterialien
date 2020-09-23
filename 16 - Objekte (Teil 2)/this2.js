"use strict"

const data = {
  todos: ["Java lernen", "node.js lernen"],
  addTodo: function(todo) {
    this.todos.push(todo)
  }
}


data.addTodo("3.Todo")

