import "/CSS/style.css";
const task_btn = document.getElementById("task_btn");
const cat_btn = document.getElementById("cat_btn");
const container = document.getElementById("task_container");
const form = document.getElementById("form");

const categories = []
cat_btn.addEventListener("click", function() {
    `
    <label for="cat">New Category: </label>
    <input id="cat"><br>`
    const cat_name = document.getElementById("cat").value;
    categories.append(cat_name);
})

task_btn.addEventListener("click", function () {
  const formHTML = `
    <form class="task_form">
    <label for="name">Task: </label>
    <input id="name"><br>
    <label for="ddl">Deadline: </label>
    <input id="ddl"><br>
    <label for="priority">Priority(high/med/low): </label>
    <input id="priority"><br>
    <label for="category">Category: </label>
    <input id="category"><br>
    <button type="submit" id="submit_btn">Submit</button><br>
    <button id="done_btn">Done</button>
    </form>    
    `;

  form.insertAdjacentHTML("beforeend", formHTML);

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
  const category = document.getElementById("category").value;

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

//category btn --- add category to cat list --- change cat to be a dropdown when creating task











//selection, iteration, sequencing, a list, one or more parameters in my procedures

//procedures: functions to remove and edit tasks, filtered view of tasks by category, and some type of visual chart.
//Framework: first perfect all the functions for a simple task list on a third fo the screen, then add the option for category tags and filtered view, and then visual view of completed/not completed tasks.
