

function getToDoListFromLocalStorage() {
    let parsedToDoList = JSON.parse(localStorage.getItem("todoListKey"));
    if (parsedToDoList === null) {
        return []
    } else {
        return parsedToDoList;
    }
}
let todoList = getToDoListFromLocalStorage();

let saveButton = document.getElementById("saveButton");
saveButton.onclick = function() {
    localStorage.setItem("todoListKey", JSON.stringify(todoList));
}



let toDoCount = todoList.length; 
let addButton = document.getElementById('addButton');  
addButton.onclick = function() {
    let userInputValue = document.getElementById('userInput').value; 
    let errorMessage = document.getElementById("errorMessage"); 
    if (userInputValue === "") {
        errorMessage.textContent = "Enter valid input";
    } else {
        errorMessage.textContent = "";
        toDoCount = toDoCount + 1; 
        let newToDo = {
            
            text: userInputValue,
            uniqueId: toDoCount,
            isChecked: false
        };
        todoList.push(newToDo); 
        createAndAppendToDo(newToDo);
        document.getElementById("userInput").value = ""; 
    }
};

let toDoItemsContainer = document.getElementById('toDoItemsContainer');

function createAndAppendToDo(todo) {
    
    let toDOId = "todo" + todo.uniqueId;
    let checkBoxId = "checkBox" + todo.uniqueId;
    let labelId = "label" + todo.uniqueId;
    
    let toDoItem = document.createElement("li");
    toDoItem.classList.add("todo-item");
    toDoItem.id = toDOId;
    toDoItemsContainer.appendChild(toDoItem);
    
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkBoxId; 
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("label-checkbox");
    
    inputElement.onclick = function() {
        onToDostatusChange(checkBoxId, labelId, toDOId);
    }
    toDoItem.appendChild(inputElement);
    
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container");
    toDoItem.appendChild(labelContainer);
    
    let labelElement = document.createElement("label");
    labelElement.textContent = todo.text;
    labelElement.classList.add("label-text");
    labelElement.setAttribute("for", checkBoxId);
    labelElement.id = labelId; 
    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);
    
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
    
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    
    deleteIcon.onclick = function() {
        deleteToDo(toDOId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}


function onToDostatusChange(checkBoxId, labelId, toDOId) {
    let checkBoxElement = document.getElementById(checkBoxId);
    let labelElement = document.getElementById(labelId); 
    
    labelElement.classList.toggle("checked");

    let toDoObjectIndex = todoList.findIndex(function(eachItem) {
        let itemToDoId = "todo" + eachItem.uniqueId;
        if (toDOId === itemToDoId) {
            return true
        } else {
            return false;
        }
    });
    let toDoObject = todoList[toDoObjectIndex];
    if (toDoObject.isChecked === true) {
        toDoObject.isChecked = false;
    } else {
        toDoObject.isChecked = true;
    }

}


function deleteToDo(toDOId) {
    let deleteToDoItem = document.getElementById(toDOId);
    toDoItemsContainer.removeChild(deleteToDoItem);  
    let deleteIndex = todoList.findIndex(function(eachItem) {
        let eachToDoItem = "todo" + eachItem.uniqueId;
        if (toDOId === eachToDoItem) {
            return true;
        } else {
            return false;
        }
    });
    todoList.splice(deleteIndex, 1); 
}
 


for (let item of todoList) {
    createAndAppendToDo(item);
}
