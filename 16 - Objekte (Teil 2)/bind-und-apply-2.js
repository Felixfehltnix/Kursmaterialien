"use strict"

const data = {
  todos: ["JavaScript lernen", "Node.JS lernen"],
  addTodo: function(todo) {
    setTimeout((function() {
      this.todos.push(todo)
      console.log(this)
    }).bind(this), 1000)
    
  }
}

data.addTodo("3. Todo")