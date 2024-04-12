function addTodo() {
    var input = document.getElementById("todo-input");
    var text = input.value.trim();

    var todoList = document.getElementById("todo-list");
    let listItem = document.createElement("li");
    listItem.classList.add("listStyle");
    listItem.textContent = text;

    var finishButton = document.createElement("button");
    finishButton.classList.add("buttonStyle");
    finishButton.textContent = "완료";
    finishButton.onclick = function() {
        finishItem(listItem);
        listItem.classList.add("listStyle2");
    };


    listItem.appendChild(finishButton);
    todoList.appendChild(listItem);

    input.value = "";
}


function finishItem(item) {
    var todoList = document.getElementById("todo-list");
    var finishList = document.getElementById("finish-list");

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("buttonStyle");
    deleteButton.textContent = "삭제";
    deleteButton.onclick = function() {
        finishList.removeChild(item);
    };

    item.removeChild(item.lastChild); 
    item.appendChild(deleteButton);
    finishList.appendChild(item);

}