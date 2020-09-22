"use strict"

const data = {
  todos: ["Java lernen", "node.js lernen"],
  addTodo: function(todo) {
    this.todos.push(todo)
  }
}

const a = data.addTodo

a("3.Todo")
