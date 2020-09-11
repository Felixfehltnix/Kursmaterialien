"use strict"

const getId = (() => {
  let counter = 1

  return () => {
    counter++
    return counter
  }
})()


function TodoModule() {
  this.todos = []
  this.events = {}
}

/**
 * @param {string} title
 */
TodoModule.prototype.addTodo = function(title) {
  const newTodo = {
    id: getId(),
    title: title,
    done: false
  }
  this.todos.push(newTodo)
  this.emit("add", newTodo)
}

TodoModule.prototype.removeCompletedTodos = function() {
  for (const todo of this.todos) {
    if (todo.done) {
      this.removeTodo(todo.id)
    }
  }
}

/** 
 * @param {number} id 
 */
TodoModule.prototype.removeTodo = function(id) {
  for (const index in this.todos) {
    const todo = this.todos[index]
    if (todo.id === id) {
      this.todos.splice(index, 1)
      this.emit("remove", todo)
    }
  }
}

/**
 * @param {number} id
 */
TodoModule.prototype.completeTodo = function(id) {
  for(const todo of this.todos) {
    if (todo.id === id && todo.done === false) {
      todo.done = true
      this.emit("changeTodo", todo)
    }
  }
}

/**
 * @param {number} id
 */
TodoModule.prototype.unCompleteTodo = function(id) {
  for(const todo of this.todos) {
    if (todo.id === id && todo.done === true) {
      todo.done = false
      this.emit("changeTodo", todo)
    }
  } 
} 

/**
 * @returns {number}
 */
TodoModule.prototype.unCompleteTodo = function() {
  let todoCount = 0
  for(const todo of this.todos) {
    if (todo.done === false) {
      todoCount++
    }
  }
  return todoCount 
}

/**
 * Löst ein Ereignis aus. Dieser Funktion dürfen beliebig viele
 * params übergeben werden, diese werden 1:1 an die Event-Listener
 * durchgereicht.
 *
 * @param {string} eventName
 * @param {*=} params
 */
TodoModule.prototype.emit = function(eventName, param) {
  if (eventName in this.events) {
    for(const f of this.events[eventName]) {
      f(param)
    }
  }
}

/**
 * Registriert einen Event-Listener für das Event eventName.
 *
 * @param {string} eventName
 * @param {Function} cb
 */
TodoModule.prototype.on = function(eventName, cb) {
    // Hier ist die Klammersetzung ganz wichtig!
    if (!(eventName in this.events)) {
      this.events[eventName] = []
    }
    this.events[eventName].push(cb)
}

module.exports = TodoModule