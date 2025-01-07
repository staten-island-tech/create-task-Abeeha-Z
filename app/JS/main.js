import "/CSS/style.css"
const task_btn = document.getElementById("task_btn");
const container = document.getElementById("task_container");
const menu = document.getElementById("menu");

task_btn.addEventListener("click", function() {
    menu.innerHTML = 
    `
    <form>
    <label for="name">Task: </label>
    <input id="name"><br>
    <label for="ddl">Deadline: </label>
    <input id="ddl"><br>
    <label for="priority">Priority(high/med/low): </label>
    <input id="priority"><br>
    <button type="submit" id="submit_btn">Submit</button>
    </form>    
    `
    const submit_btn = document.getElementById("submit_btn")

    submit_btn.addEventListener("submit", function() {
        addTask();
    });

    });

function addTask() {
    const task_name = document.getElementById("name").value
    const deadline = document.getElementById("ddl").value
    const priority = document.getElementById("priority").value

    container.insertAdjacentHTML("beforeend", `
    <div>
    <p>${task_name}, due ${deadline}, priority: ${priority}</p>
  </div>
        `)
}

//    <input type="checkbox" id="task" checked />
//<label for="task">${task_name}, due ${deadline}, priority: ${priority}</label>
// eventlis for taskbtn --- show form -- event listener for form submission --- run addTask()


