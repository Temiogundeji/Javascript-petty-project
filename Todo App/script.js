let myTodo = [];
let todoContain =  document.getElementById('todos');
let inputTodo = document.querySelector('input');
let todo_box = document.createElement('div');
todo_box.appendChild(inputTodo);

function addNew(todo){
    myTodo.push(todo);
    todoContain.appendChild(todo_box);
}
function removeTod(todo){
    myTodo.splice(1,todo);
}