'use strict';

const KEY_ENTER = 13

const todoModule = {
  todos: [],

  /**
   * @param {string} title
   */
  addTodo(title) {
    for(const todo of this.todos) {
      if (todo.title === title) {
        return
      }
    }
    const newTodo = {
      title: title,
      done: false
    }
    this.todos.push(newTodo)
    this.emit("add", newTodo)
  },

 /**
  * @param {string} title
  */
  completeTodo(title) {
    for(const todo of this.todos) {
      if (todo.title === title && todo.done === false) {
        todo.done = true
        this.emit("complete", todo)
      }
    }
  },

  /**
   * @returns {number}
   */
  getTodoCount() {
    let todoCount = 0
    for(const todo of this.todos) {
      if (todo.done === false) {
        todoCount++
      }
    }
    return todoCount
  },


  events: {},
  /**
   * Löst ein Ereignis aus. Dieser Funktion dürfen beliebig viele
   * params übergeben werden, diese werden 1:1 an die Event-Listener
   * durchgereicht.
   *
   * @param {string} eventName
   * @param {*=} params
   */
  emit(eventName, param) {
    if (eventName in this.events) {
      for(const f of this.events[eventName]) {
        f(param)
      }
    }
  },

  /**
   * Registriert einen Event-Listener für das Event eventName.
   *
   * @param {string} eventName
   * @param {Function} cb
   */
  on(eventName, cb) {
    // Hier ist die Klammersetzung ganz wichtig!
    if (!(eventName in this.events)) {
      this.events[eventName] = []
    }
    this.events[eventName].push(cb)
  }
}

document.addEventListener("DOMContentLoaded", () => {
	
});
