"use strict"

const KEY_ENTER = 13

const getId = (() => {
    let counter = 0
    return () => {
        counter++
        return counter
    }
})()

const todoModule = {

    todos: [],
    /**
     * Function creates a new entry and adds it to todos[]
     * @param {string} title
     */
    addTodo(title) {
        const newTodo = {
            id: getId(),
            title: title,
            done: false,
        }
        this.todos.push(newTodo)
        this.emit("add", newTodo)
    },
    /**
     * Sets the "done" status of one entry in todos[] to true
     * @param {number} id
     */
    completeTodo(id) {
        for (const todo of this.todos) {
            if (id === todo.id && todo.done === false) {
                todo.done = true
                this.emit("changeTodo", todo)
            }
        }
    },
    /**
     * Sets the "done" status of one entry in todos[] to true
     * @param {number} id
     */
    unCompleteTodo(id) {
        for (const todo of this.todos) {
            if (id === todo.id && todo.done === true) {
                todo.done = false
                this.emit("changeTodo", todo)
            }
        }
    },
    /**
     * Removes one entry in todos[]
     * @param {number} id
     */
    removeTodo(id) {
        for (const i in this.todos) {
            const todo = this.todos[i]
            if (id === todo.id) {
                this.todos.splice(i, 1);
                this.emit("remove", todo)
            }
        }
    },

    //================================================
    // Event emitter und event listener

    events: {},

    /**
     *
     * @param {string} eventName
     * @param {function} callback
     */
    on(eventName, callback) {
        if (!(eventName in this.events)) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback)
    },


    /**
     *
     * @param {string} eventName
     * @param {*=} param
     */
    emit(eventName, param) {
        if (eventName in this.events) {
            for (const f of this.events[eventName]) {
                f(param);
            }
        }
    }

}

//========================================================================
//DOM elemente zusammenbauen:

document.addEventListener("DOMContentLoaded", () => {

    const elements = {
        newTodo: document.querySelector(".new-todo"),
        todoList: document.querySelector(".todo-list"),
        footer: document.querySelector(".footer"),
        todoCount: document.querySelector(".todo-count strong"),
        clearCompleted: document.querySelector(".clear-completed")
    }

    elements.newTodo.addEventListener("keypress", (event) => {
        const todoTitle = elements.newTodo.value
        if (event.keyCode === KEY_ENTER && todoTitle !== "") {
            todoModule.addTodo(todoTitle);
            elements.newTodo.value = "";
        }
    })

    todoModule.on("add",(todo)=>{
        const labelElement = document.createElement("label")
        labelElement.appendChild(document.createTextNode(todo.title))

        const checkBox = document.createElement("input")
        checkBox.classList.add("toggle")
        checkBox.setAttribute("type","checkbox");

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("destroy")

        const divElement = document.createElement("div")
        divElement.classList.add("view")
        divElement.appendChild(checkBox)
        divElement.appendChild(labelElement)
        divElement.appendChild(deleteButton)

        const liElement = document.createElement("li")
        liElement.appendChild(divElement)

        elements.todoList.prepend(liElement)
    })

})




