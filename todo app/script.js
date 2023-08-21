const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos')

const todosUL = JSON.parse(localStorage.getItem('todos'));

if(todosUL  ){
    todos.forEach(todo=>{
        addTodo(todo)
    })
    addTodo()
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
});

function addTodo(todo){
    const todoText = input.value;
    if(todo){
        todoText = todo.text;
    }
    if(todoText){
        const todoEl = document.createElement('li');
        if(todo.completed){
            todoEl.classList.add('completed');
        }
        

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle("completed");
            update();
        })
        todoEl.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            //delete the item from DOM and local storage
            todoEl.remove();
            update();
        })

        todos.appendChild(todoEl);
        input.value = "";
        update()
    }
};



function update() {
    const todosEl = document.querySelectorAll('li');
    const todos = [];
    todosEl.forEach(todoEl =>{
        todos.push({
            text:noteEl.innerText,
            completed:todoEl.classList.contains('completed'),
        });
    });
    localStorage.setItem('todos',JSON.stringify(todos));
}

