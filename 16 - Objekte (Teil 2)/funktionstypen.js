"use strict"

// setTimeout(function(){
//   console.log("halloWelt!");
// },1000)

function runCallback(cb) {
  cb();
}


const data = {
  todos: ["Learn Java Script", "learn Node.js"],
  addTodo: function (todo) {
    runCallback( ()=>{
      this.todos.push(todo);
    })
  }
}

data.addTodo("3. Todo")
console.log(data);
