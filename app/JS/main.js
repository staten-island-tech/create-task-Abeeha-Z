import "/CSS/style.css";
const task_btn = document.getElementById("task_btn");
const cat_btn = document.getElementById("cat_btn");
const container = document.getElementById("task_container");
const form = document.getElementById("form");

//dropdown for filter

function filter_view {
  
}



let categories = [];

cat_btn.addEventListener("click", function (event) {
  const cat_form = `
    <form class="task_form">
    <label for="cat">New Category: </label>
    <input id="cat"><br>
    <button type="submit" id="cat-submit">Submit</button>
    </form>`;
  form.insertAdjacentHTML("beforeend", cat_form);

  const catsubmitbtn = document.getElementById("cat-submit");
  catsubmitbtn.addEventListener("click", function (event) {
    event.preventDefault();
    const cat_name = document.getElementById("cat").value;
    categories.push(cat_name);
    console.log(categories);
    update_categories();
  });
});
//cat btn click -- input form for name--store in object -- run fucntion to update cats --- formHTML += new option --edit list and rerun function every time the add category button is clicked

function update_categories() {
  const catselect = document.getElementById("cat-select");
  catselect.innerHTML = `<option>Select A Category</option>`;
  categories.forEach((category) =>
    catselect.insertAdjacentHTML(
      "beforeend",
      `
    <option>${category}</option>`
    )
  );
}

task_btn.addEventListener("click", function () {
  const formHTML = `
    <form class="task_form">
    <label for="name">Task: </label>
    <input id="name"><br>
    <label for="ddl">Deadline: </label>
    <input id="ddl"><br>
    <label for="priority">Priority(high/med/low): </label>
    <input id="priority"><br>
    <select id="cat-select">
    <option>Select A Category</option>
    </select>
    <button type="submit" id="submit_btn">Submit</button>
    <button id="done_btn">Done</button><br>
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

  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class= list_item>
    <input type="checkbox" id="task" unchecked />
    <label for="task">${task_name}, due ${deadline}<br>
    Priority: ${priority}<br>
    Category: ${category}<br></label>
    </div>
        `
  );
}

//selection, iteration, sequencing, a list, one or more parameters in my procedures

//procedures: functions to remove and edit tasks, filtered view of tasks by category, and some type of visual chart.
//Framework: first perfect all the functions for a simple task list on a third fo the screen, then add the option for category tags and filtered view, and then visual view of completed/not completed tasks.
