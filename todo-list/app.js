const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");
const collection = document.querySelector('.collection');
const clearTaskBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector("#filter");
// console.log(filterInput,'filterInput');

// taskForm.addEventListener("submit", onTaskSubmit);
taskForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const taskInputValue = taskInput.value;
  // console.log(taskInputValue, 'taskInputValue');

  if (!taskInputValue) {
    alert('please fill out this field');
    return;
  }

  appendTasksWithDeleteIcon(taskInputValue);
  saveTaskIntoLocalStorage(taskInputValue);
  taskInput.value = '';
});
function appendTasksWithDeleteIcon(taskInputValue) {
  const listElement = document.createElement("li");
  // console.log(listElement, 'listElement');
  listElement.className = 'collection-item';
  listElement.innerHTML = `
    ${taskInputValue}
    <a href="" class="secondary-content">
    <i class="delete-item fa fa-remove"></i>
    </a>
    `;
  collection.append(listElement);
  bindDeleteTaskIcon();
}

// console.log(taskForm,'taskform');

function bindDeleteTaskIcon() {
  const selectAllDeleteIcons = document.querySelectorAll(".delete-item");
  // console.log(selectAllDeleteIcons,'selectAllDeleteIcons');
  selectAllDeleteIcons.forEach(function (singleBtn) {
    singleBtn.addEventListener('click', removeTaskHandler);
  });
  // console.log(selectAllDeleteIcons,'selectAllDeleteIcons');
};
function removeTaskHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  // console.log(currentElement,'currentElement');
  if (confirm('Are you sure?')) {
    const selectLiElement = currentElement.parentElement.parentElement;
    removeTaskFromLocalStorage(selectLiElement.innerText);
    selectLiElement.remove();
  }
};

clearTaskBtn.addEventListener('click', clearTaskHandler);

function clearTaskHandler(event) {
  event.preventDefault();
  if (confirm("Are you sure?")) {
    collection.innerHTML = "";
    localStorage.removeItem("tasks");
  }
};

filterInput.addEventListener('input', filterTaskHandler);

function filterTaskHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  // console.log(currentElement,'currentElement');
  const searchValue = currentElement.value.toLowerCase();
  // console.log(searchValue,'searchValue');
  const selectAllItems = document.querySelectorAll('.collection-item');
  // console.log(selectAllItems,'selectAllItems');
  selectAllItems.forEach(function (singleItem) {
    const itemText = singleItem.innerText.toLowerCase();
    // console.log(itemText,'itemText');
    if (itemText.indexOf(searchValue) == -1) {
      singleItem.style.display = 'none';
      // singleItem.innerText = 'No results found';
    }
    else {
      singleItem.style.display = 'block';
    };
  });
};

function getOldTaskFromLocalStorage() {
  const getTaskFromLocalStorage = localStorage.getItem("tasks");
  if (getTaskFromLocalStorage) {
    return JSON.parse(getTaskFromLocalStorage);
  }
  else {
    return [];
  }
}
function saveTaskIntoLocalStorage(taskInputValue) {
  // console.log(taskInputValue,'taskInputValue');
  const oldTasks = getOldTaskFromLocalStorage();
  // console.log(oldTasks,'oldTask');
  oldTasks.push(taskInputValue);
  // console.log(taskInputValue,'taskInputValue');
  // console.log(oldTasks,'oldTasks');
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

document.addEventListener("DOMContentLoaded", getTasksFromLocalStorageAndAppend);

function getTasksFromLocalStorageAndAppend() {
  const oldTask = getOldTaskFromLocalStorage();
  oldTask.forEach(function (singleTask) {
    // console.log(singleTask,'singleTask');
    appendTasksWithDeleteIcon(singleTask);
  });
}

function removeTaskFromLocalStorage(taskValue) {
  // console.log(taskValue,'taskValue');
  const oldTask = getOldTaskFromLocalStorage();
  oldTask.forEach(function (singleTaskFromLocalStorage, index) {
    // console.log(singleTaskFromLocalStorage,'singleTaskFromLocalStorage');
    // console.log(index,'index');
    if (singleTaskFromLocalStorage === taskValue) {
      // console.log(taskValue,'taskValue');
      // const splice = oldTask.splice(index, 1);
      oldTask.splice(index, 1);
      console.log(oldTask, 'oldTask');
      // console.log(splice,'splice');
    }
  });
  localStorage.setItem("tasks", JSON.stringify(oldTask));
};

