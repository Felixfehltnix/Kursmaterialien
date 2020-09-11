"use strict"

/*setTimeout(function() {
  console.log("Hallo Welt!")
}, 1000)
*/

function runCallback(cb) {
  cb()
}

const data = {
  todos: ["JavaScript lernen", "Node.JS lernen"],
  addTodo: function(todo) {
    runCallback(() => {
      this.todos.push(todo)
    })
    /*
    const _this = this
    runCallback(function() {
      _this.todos.push(todo)
    })
    */
  }
}

data.addTodo("3. Todo")
console.log(data)