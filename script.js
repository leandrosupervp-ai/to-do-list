function addTask() {

    const tasks = document.getElementById("task-input").value;

    if (tasks === "") {
        alert("Digite uma tarefa");
        return;
    }

    const list = document.createElement("li");
    list.innerText = tasks;

    document.getElementById("task-input").value = ""

    const delBtn = document.createElement("button");
    delBtn.innerText = "Apagar";

    list.appendChild(delBtn);

    const taskList = document.getElementById("task-list");
    taskList.appendChild(list);

    delBtn.addEventListener("click", function() {
    list.remove();
    });

}




    
