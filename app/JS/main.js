import "/CSS/style.css";
const task_btn = document.getElementById("task_btn");
const cat_btn = document.getElementById("cat_btn");
const form = document.getElementById("form");
const filter_btn = document.getElementById("filter_btn");
const task_list = document.getElementById("task-list-container");

let categories = [];
let tasks = [];

cat_btn.addEventListener("click", function () {
  const cat_form = `
    <form class="task_form">
    <label for="cat">New Category: </label>
    <input id="cat"><br>
    <button type="submit" id="cat-submit" class="m-4 border-2 border-gray-500 p-2 rounded">Submit</button>
    <button id="cat-done" class="m-4 border-2 border-gray-500 p-2 rounded">Done</button><br>
    </form>`;
  form.insertAdjacentHTML("beforeend", cat_form);

  const catsubmitbtn = document.getElementById("cat-submit");
  catsubmitbtn.addEventListener("click", function (event) {
    event.preventDefault();
    const cat_name = document.getElementById("cat").value;
    categories.push(cat_name);
    update_categories();
  });
  const catdone_btn = document.getElementById("cat-done");
  catdone_btn.addEventListener("click", function () {
    const formElements = form.querySelectorAll(".task_form");
    formElements.forEach((element) => element.remove());
  });
});

function update_categories() {
  const filter_select = document.getElementById("view_sort");
  const catselect = document.getElementById("cat-select");

  catselect.innerHTML = `<option>Select A Category</option>`;
  filter_select.innerHTML = "<option>Filter by Category</option>";
  categories.forEach((category) => {
    catselect.insertAdjacentHTML("beforeend", `<option>${category}</option>`);
    filter_select.insertAdjacentHTML(
      "beforeend",
      `<option>${category}</option>`
    );
  });
}

task_btn.addEventListener("click", function () {
  const formHTML = `
    <form class="task_form">
    <label for="name">Task: </label><br>
    <input id="name">
    <label for="ddl">Deadline: </label><br>
    <input id="ddl">
    <label for="priority">Priority(h/m/l): </label><br>
    <input id="priority">
    <select id="cat-select"> 
    <option>Select A Category</option>
    </select><br>
    <button type="submit" class="m-4 border-2 border-gray-500 p-2 rounded" id="submit_btn">Submit</button>
    <button id="done_btn" class="m-4 border-2 border-gray-500 p-2 rounded">Done</button><br>
    </form>    
    `;

  form.insertAdjacentHTML("beforeend", formHTML);

  update_categories();

  const submit_btn = document.getElementById("submit_btn");
  const done_btn = document.getElementById("done_btn");

  submit_btn.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
  });

  done_btn.addEventListener("click", function () {
    form.innerHTML = "";
  });
});

function addTask() {
  const task_name = document.getElementById("name").value;
  const deadline = document.getElementById("ddl").value;
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("cat-select").value;

  const task = {
    task_name,
    deadline,
    priority,
    category,
  };

  tasks.push(task);
  console.log(tasks);
  insert_task(task);
}

function insert_task(task) {
  task_list.insertAdjacentHTML(
    "beforeend",
    `
      <div class="list_item">
        <input type="checkbox" id="task" unchecked />
        <label for="task">${task.task_name}, due ${task.deadline}<br>
        Priority: ${task.priority}<br>
        Category: ${task.category}<br></label>
      </div>
      `
  );
}

function displaytasks(tasks) {
  task_list.innerHTML = "";
  const selectedCategory = document.getElementById("view_sort").value;

  if (selectedCategory === "Filter by Category") {
    tasks.forEach((task) => {
      insert_task(task);
    });
  } else {
    tasks.forEach((task) => {
      if (task.category === selectedCategory) {
        insert_task(task);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  filter_btn.addEventListener("click", function () {
    displaytasks(tasks);
  });
});

//view_sort.value is coming up as null when we click go to activate displaytasks(), and the filter dropdown resets after you click done and clear the forms

//selection, iteration, sequencing, a list, one or more parameters in my procedures

//procedures: functions to remove and edit tasks, filtered view of tasks by category, and some type of visual chart.
//Framework: first perfect all the functions for a simple task list on a third fo the screen, then add the option for category tags and filtered view, and then
// visual view of completed/not completed tasks
