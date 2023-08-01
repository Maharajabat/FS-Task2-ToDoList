function Task() {
    var Input = document.getElementById("tasks");
    var List = document.getElementById("list");

    if (Input.value.trim() !== "") {
        var taskItem = document.createElement("listdesign");
        taskItem.innerHTML = 
           ` ${Input.value}
            <button onclick="DeleteTask(this)">X</button>`;
        List.appendChild(taskItem);
        Input.value = '';
    }
    else{
        alert("Nothing is Entered in the task box!!");
    }
}
    function DeleteTask(button){
        var List = document.getElementById("list");
        List.removeChild(button.parentNode);
    }

