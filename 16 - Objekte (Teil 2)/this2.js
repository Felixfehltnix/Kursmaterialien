"use strict"

const data = {
  todos: ["JavaScript lernen", "Node.JS lernen"],
  addTodo: function(todo) {
    this.todos.push(todo)
  }
}

data.addTodo("4. Todo")