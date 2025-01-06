import "./CSS/style.css"
const task_btn = document.getElementById("task_btn")
const container = document.getElementById("task_container");
const menu = document.getElementById("menu")

task_btn.addEventListener("event", function() {
    menu.innerHTML = 
    `
    <form id="taskform" type="submit">
        <input id="name">
    <label for="name">Task: </label> <br>
        <input id="ddl">
    <label for="ddl">Deadline: </label> <br>
        <input id="priority">
    <label for="priority">Priority(high/med/low): </label> <br>
    </form>    
    `
    });

    task_form = document.getElementById("taskform")

    task_form.addEventListener("submit", function() {
        addTask();
    });



function addTask() {
    task_name = document.getElementById("name").value
    deadline = document.getElementById("ddl").value
    priority = document.getElementById("priority").value.lower();

    container.insertAdjacentHTML("beforeend", `
    <div>
    <input type="checkbox" id="task" checked />
    <label for="task">${task_name}, due ${deadline}, priority: ${priority}</label>
  </div>
        `)

}


// eventlis for taskbtn --- show form -- event listener for form submission --- run addTask()


