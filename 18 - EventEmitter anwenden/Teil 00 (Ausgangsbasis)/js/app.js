'use strict'

const KEY_ENTER = 13

const getId = (() => {
    let counter = 1
    return () => {
        counter++
        return counter
    }
})()


const todoModule = {
    todos: [],

    /**
     * @param {string} title
     */
    addTodo(title) {
        const newTodo = {
            id: getId(),
            title: title,
            done: false
        }
        this.todos.push(newTodo)
        this.emit("add", newTodo)
        console.log(this.events["add"])
    },

    removeCompletedTodos() {
        for (const todo of this.todos) {
            if (todo.done) {
                this.removeTodo(todo.id);
            }
        }
    },

    /**
     * @param {number} id
     */
    removeTodo(id) {
        for (const i in this.todos) {
            const todo = this.todos[i]
            if (todo.id === id) {
                this.todos.splice(i, 1);
                this.emit("remove", todo);
            }
        }
    },
// ==========================================================

    /**
     * @param {number} id
     */
    completeTodo(id) {
        for (const todo of this.todos) {
            if (todo.id === id && todo.done === false) {
                todo.done = true
                this.emit("changeTodo", todo)
            }
        }
    },

    /**
     * @param {number} id
     */
    unCompleteTodo(id) {
        for (const todo of this.todos) {
            if (todo.id === id && todo.done === true) {
                todo.done = false
                this.emit("changeTodo", todo)
            }
        }
    },

    /**
     * @returns {number}
     */
    getTodoCount() {
        let todoCount = 0
        for (const todo of this.todos) {
            if (todo.done === false) {
                todoCount++
            }
        }
        return todoCount
    },

// ==========================================================

    events: {},

    /**
     *
     * @param {string} eventName
     * @param {Function} cb
     */
    on(eventName, cb) {
        if (!(eventName in this.events)) {
            this.events[eventName] = []
        }
        this.events[eventName].push(cb)
    },

    /**
     *
     * @param {string} eventName
     * @param {*=} param
     */
    emit(eventName, param) {
        if (eventName in this.events) {
            for (const f of this.events[eventName]) {
                f(param)
            }
        }
    }

}

// ====================================================================================================================
// Select DOM-Elements and adds a new todo to the TodoModule when Enter-Key is pressed.

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        newTodo: document.querySelector(".new-todo"),
        todoList: document.querySelector(".todo-list"),
        footer: document.querySelector(".footer"),
        todoCount: document.querySelector(".todo-count strong"),
        clearCompleted: document.querySelector(".footer"),
    }

// ==========================================================

    elements.newTodo.addEventListener("keypress", (event) => {
        const todoTitle = elements.newTodo.value
        if (event.keyCode === KEY_ENTER && todoTitle !== "") {
            todoModule.addTodo(todoTitle)
            elements.newTodo.value = "";
        }
    })

// ==========================================================

    elements.clearCompleted.addEventListener("click", () => {
        todoModule.removeCompletedTodos();
    })

// ====================================================================================================================
// when "add" happens, build List Element and add it to TODO List.

    todoModule.on("add", (todo) => {

        const labelElement = document.createElement("label")
        labelElement.appendChild(document.createTextNode(todo.title))

        const checkBox = document.createElement("input")
        checkBox.classList.add("toggle")
        checkBox.setAttribute("type", "checkbox")

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                todoModule.completeTodo(todo.id)
            } else {
                todoModule.unCompleteTodo(todo.id)
            }
        })

        const destroyButton = document.createElement("button")
        destroyButton.classList.add("destroy")

        destroyButton.addEventListener("click", () => {
            todoModule.removeTodo(todo.id)
        })

        const divElement = document.createElement("div")
        divElement.classList.add("view")
        divElement.appendChild(checkBox)
        divElement.appendChild(labelElement)
        divElement.appendChild(destroyButton)

        const liElement = document.createElement("li")
        liElement.setAttribute("data-ID", todo.id)
        liElement.appendChild(divElement)

        elements.todoList.prepend(liElement)

    })

// ==========================================================
// deletes one Todo from DOM

    todoModule.on("remove", (todo) => {
        const liElement = elements.todoList.querySelector("li[data-ID='" + todo.id + "']")
        liElement.remove()
    })

// ==========================================================
// adds completed class to checked Todo's

    todoModule.on("changeTodo", (todo) => {
        const liElement = elements.todoList.querySelector("li[data-ID='" + todo.id + "']")
        if (todo.done) {
            liElement.classList.add("completed");
        } else {
            liElement.classList.remove("completed");
        }
    })

// ====================================================================================================================
// updates footer display

    const refreshFooter = () => {
        elements.todoCount.innerText = todoModule.getTodoCount().toString()
    }
    todoModule.on("add", refreshFooter);
    todoModule.on("changeTodo", refreshFooter);
    todoModule.on("remove", refreshFooter);

});
