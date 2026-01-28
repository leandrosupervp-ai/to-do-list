function doneTask(taskElement) {
    taskElement.classList.toggle("done")
    }

function addTask() {

    const tasks = document.getElementById("task-input").value;

    if (tasks === "") {
        alert("Digite uma tarefa");
        return;
    }

    const list = document.createElement("li");
    list.innerText = tasks;

    document.getElementById("task-input").value = ""

    const doneBtn = document.createElement("button")
    doneBtn.innerText = "Feito";

    const delBtn = document.createElement("button");
    delBtn.innerText = "Apagar";

    list.appendChild(doneBtn);
    
    list.appendChild(delBtn);

    const taskList = document.getElementById("task-list");
    taskList.appendChild(list);

    doneBtn.addEventListener("click", function() {
        doneTask(list);
    })

    delBtn.addEventListener("click", function() {
    list.remove();
    });

}




    
