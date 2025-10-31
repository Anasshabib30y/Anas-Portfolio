let input = document.getElementById("todo-input");
let submit = document.querySelector(".add-btn");
let todolistDiv = document.querySelector(".todo-list");
let cleareAll_btn = document.querySelector(".clear-btn");
let controlsDiv = document.querySelector(".controls");
let pindingtodos = document.getElementById("pending");
let completedTodos = document.getElementById("completed");
let alltodos = document.getElementById("all");
let alert = document.querySelector(".alert");
let counter = document.getElementById("counter");

let todosArray = [];

gitTodosDataFromLocalstorage();

submit.onclick = function () {
  if (input.value !== "") {
    if (isHtml(input.value)) {
      displayAlert("These tags are not allowed", "danger");
    } else {
      if (submit.value == "update") {
        editTodoById(input.getAttribute("data-id"), input.value);
        submit.value = "add";
        displayAlert("Todo updated successfully", "success");
      } else {
        addtodoItem(input.value);
        displayAlert("Todo added successfully", "success");
      }
      input.value = "";
    }
  } else {
    displayAlert("Please enter a todo", "danger");
  }
};

function addtodoItem(todoTitle) {
  let todoItmObG = {
    id: Date.now(),
    title: todoTitle,
    completed: false,
  };
  todosArray.push(todoItmObG);
  addtodoItemToHtml(todoItmObG);
  addTodosDataFromLocalstorage(todosArray);
  uppdateCounter();
}

function addtodoItemToHtml(todoItmObG) {
  const todoitem = document.createElement("div");
  todoitem.className = todoItmObG.completed ? "todo-item-done" : "todo-item";
  todoitem.setAttribute("data-id", todoItmObG.id);

  todoitem.innerHTML = `
    <div class="todo-text">
      <input 
        type="checkbox" 
        name="todo-checkbox" 
        id="todo-checkbox-id-${todoItmObG.id}" 
        ${todoItmObG.completed ? "checked" : ""}
        class="todo-checkbox"
        onclick="toggleTodoStatusById(this)"
      />
      <label 
        for="todo-checkbox-id-${todoItmObG.id}" 
        class="todo-title" 
        data-id="${todoItmObG.id}">
        ${todoItmObG.title}
      </label>
    </div>
    <div class="btn-container">
      <button type="button" class="edit-btn">Edit</button>
      <button type="button" class="delete-btn">Delete</button>
    </div>
  `;

  todolistDiv.appendChild(todoitem);
}

todolistDiv.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("edit-btn")) {
    const parent = target.closest(".todo-item, .todo-item-done");
    input.value = parent.querySelector(".todo-title").innerText;
    input.setAttribute("data-id", parent.getAttribute("data-id"));
    submit.value = "update";
  } else if (target.classList.contains("delete-btn")) {
    const parent = target.closest(".todo-item, .todo-item-done");
    const id = parent.getAttribute("data-id");
    deleteTodoById(id);
    parent.remove();
  }
  uppdateCounter();
});

function toggleTodoStatusById(checkbox) {
  const id = checkbox.id.split("-")[3];
  const todoitemelement = document.querySelector(`[data-id="${id}"]`);

  todoitemelement.className = checkbox.checked
    ? "todo-item-done"
    : "todo-item";

  todosArray = todosArray.map((todo) =>
    todo.id == id ? { ...todo, completed: checkbox.checked } : todo
  );

  addTodosDataFromLocalstorage(todosArray);
  uppdateCounter();
}

function addTodosDataFromLocalstorage(todosArray) {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function gitTodosDataFromLocalstorage() {
  const data = localStorage.getItem("todos");
  if (data) {
    todosArray = JSON.parse(data);
    addtodoelemntsToHtml(todosArray);
  }
}

function addtodoelemntsToHtml(todosArray) {
  todolistDiv.innerHTML = "";
  todosArray.forEach((todo) => addtodoItemToHtml(todo));
  uppdateCounter();
}

function deleteTodoById(id) {
  todosArray = todosArray.filter((todo) => todo.id != id);
  addTodosDataFromLocalstorage(todosArray);
}

function editTodoById(id, Title) {
  todosArray = todosArray.map((todo) =>
    todo.id == id ? { ...todo, title: Title } : todo
  );
  addTodosDataFromLocalstorage(todosArray);
  addtodoelemntsToHtml(todosArray);
}

cleareAll_btn.addEventListener("click", function () {
  todolistDiv.innerHTML = "";
  todosArray = [];
  addTodosDataFromLocalstorage(todosArray);
  uppdateCounter();
});

controlsDiv.addEventListener("click", function (event) {
  const id = event.target.id;
  let filtered = [];

  if (id === "all") {
    filtered = todosArray;
  } else if (id === "pending") {
    filtered = todosArray.filter((todo) => !todo.completed);
  } else if (id === "completed") {
    filtered = todosArray.filter((todo) => todo.completed);
  }

  addtodoelemntsToHtml(filtered);

  // تحديث الـ active class
  [alltodos, pindingtodos, completedTodos].forEach((el) =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

function displayAlert(text, action) {
  alert.innerHTML = text;
  alert.className = "alert " + action;
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}

function isHtml(str) {
  const div = document.createElement("div");
  div.innerHTML = str;
  return Array.from(div.childNodes).some((node) => node.nodeType === 1);
}

function uppdateCounter() {
  const completed = todosArray.filter((todo) => todo.completed).length;
  const pending = todosArray.length - completed;

  counter.innerHTML = `
    <span class="counter-left">${pending}</span> pending,
    <span class="counter-completed">${completed}</span> completed
  `;
}

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    submit.click();
  }
});
