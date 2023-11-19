const inputValue = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(inputValue.value === ''){
        alert("You must add a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        taskList.appendChild(li);

        let span  = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputValue.value = ''
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showData(){
   taskList.innerHTML = localStorage.getItem("data")
}

showData();