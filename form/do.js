let tasks = [];

document.addEventListener("DOMContentLoaded", function() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks();
});

document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("saveTasksBtn").addEventListener("click", saveTasks);
document.getElementById("clearTasksBtn").addEventListener("click", clearAllTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({
            text: taskText,
            completed: false
        });
        taskInput.value = "";
        renderTasks();
    }
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Tasks saved successfully!");
}

function clearAllTasks() {
    tasks = [];
    localStorage.removeItem("tasks");
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add("task-item");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", () => completeTask(index));
        li.appendChild(checkbox);

        let taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.classList.add("task-text");
        if (task.completed) {
            taskText.classList.add("completed");
        }
        li.appendChild(taskText);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt delete"></i>';
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => deleteTask(index));
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}
