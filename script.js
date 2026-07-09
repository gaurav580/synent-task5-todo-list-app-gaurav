let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

window.onload = function(){
    loadTasks();
}

function addTask(){

    if(taskInput.value.trim()==""){
        alert("Please enter a task!");
        return;
    }

    createTask(taskInput.value);

    saveTasks();

    taskInput.value="";
}

function createTask(taskText){

    let li=document.createElement("li");

    li.innerHTML=`
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
}

function toggleTask(element){

    element.classList.toggle("completed");

    saveTasks();
}

function deleteTask(button){

    button.parentElement.remove();

    saveTasks();
}

function saveTasks(){

    localStorage.setItem("tasks",taskList.innerHTML);

}

function loadTasks(){

    taskList.innerHTML=localStorage.getItem("tasks") || "";

}