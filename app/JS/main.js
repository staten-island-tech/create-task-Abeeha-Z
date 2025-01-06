import "./src/style.css"
const addtask_btn = document.getElementById("task_btn");
const container = document.getElementById("task_container");
const menu = document.getElementById("menu")

function addTask() {
    menu.innerHTML = 
    `
    <form type="submit">
        <input id="name">
    <label for="name">Task: </label> <br>
        <input id="ddl">
    <label for="name">Deadline: </label> <br>
        <input id = "priority">
    <label for="name">Priority(h/m/l): </label> <br>
    </form>    
    `
    task_name = document.getElementById("name").value
    deadline = document.getElementById("ddl").value
    priority = document.getElementById("priority").value

    menu.insertAdjacetHTML

}

addtask_btn.addEventListener("click", function() {
    menu
});



//    <input type="checkbox" id="task" checked />
/* <label for="task">${task.description}</label>
</div> */