// script.js
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage
    taskInput.value = "";
    displayTasks(); // Update task list on view tasks page
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Update tasks in local storage
  displayTasks(); // Update task list on view tasks page
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = `${index + 1}. ${task}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.onclick = function() {
      deleteTask(index);
    };
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Call displayTasks() when the page loads to display tasks
window.onload = displayTasks;
