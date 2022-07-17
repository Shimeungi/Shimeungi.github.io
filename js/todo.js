const toDo = document.querySelector(".toDo");
const toDoBtn = toDo.querySelector("#toDoBtn");
const toDoList = toDo.querySelector(".toDoList");

// toDoForm
const toDoForm = toDoList.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("#toDoInput");
const toDoFormBtn = toDoForm.querySelector("#toDoFormBtn");

// ul Todo List
const todoListUl = toDoList.querySelector(".toDoListUl");

let checkedtoDo = true;

// toDoArray
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function toDoHandler(){
    
    
    if(checkedtoDo === true){
        checkedtoDo = false;
        console.log("toDoList hidden remove Click");
        toDoList.classList.remove(HIDDEN_CLASSNAME);
    } else {
        console.log("toDoList hidden add Click");
        checkedtoDo = true;
        toDoList.classList.add(HIDDEN_CLASSNAME);
    }
    
}

function deleteTodo(event){
    const li = event.target.parentElement;
    
    li.remove();

    const removeToDos = toDos.filter(function(toDoItem) {
        return toDoItem.id !== parseInt(li.id);
    })
    toDos = removeToDos;
    saveToDos();  
}
function paintTodo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;

    button.innerHTML =  "  ✔";
    button.style.marginLeft = "20px";
    button.style.marginTop = "20px";
    button.style.backgroundColor = "transparent";
    
    button.onmouseover = function(){
        button.style.backgroundColor = "yellow";
    }
    button.onmouseleave = function(){
        button.style.backgroundColor = "transparent";
    }

    button.addEventListener("click", deleteTodo);


    li.appendChild(span);
    li.appendChild(button);

    todoListUl.appendChild(li);
}

function toDoFormHandler(event){
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: inputValue,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    console.log("toDos : " + toDos);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoBtn.addEventListener("click", toDoHandler);
toDoForm.addEventListener("submit", toDoFormHandler);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
} else {
    console.log("error");
}