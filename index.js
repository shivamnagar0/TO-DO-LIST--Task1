const taskInput = document.querySelector('#task');
const addButton = document.querySelector('.inpbtn');
const taskList = document.querySelector('#tasks_list');
const pendingTasks = document.querySelector('.pending_Tasks');
const clearButton = document.querySelector('.msgbtn');

// Event listeners
addButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
clearButton.addEventListener('click', clearAllTasks);

// Functions
function addTask() {
  // Get input value and create new task list item
  const newTask = taskInput.value;
  const taskItem = document.createElement('li');
  taskItem.className = 'task_item';
  taskItem.innerHTML = `
    <span>${newTask}</span>
    <i class="glyphicon glyphicon-trash"></i>
  `;

  // Add new task to task list
  if (newTask !== '') {
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }

  // Update pending tasks
  updatePendingTasks();
}

function deleteTask(e) {
  // Check if delete button was clicked
  if (e.target.classList.contains('glyphicon-trash')) {
    // Remove task item
    const taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
  }

  // Update pending tasks
  updatePendingTasks();
}

function clearAllTasks() {
  // Remove all task items
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Update pending tasks
  updatePendingTasks();
}

function updatePendingTasks() {
  // Get number of pending tasks
  const numTasks = taskList.children.length;

  // Update pending tasks element
  pendingTasks.innerText = numTasks;

  // Show/hide clear all button
  if (numTasks > 0) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
}
