function search(ele) {
    if(event.key === 'Enter') {
        document.getElementById("list1").innerHTML += `<div class="little-container"><p id="left">${ele.value}</p><button id="delete" name="${ele.value}" onclick="Remove(this, this.name)">완료</button></div>`;
        ele.value = "";
    }
}

function Remove(e, name) {
    e.parentElement.remove();
    document.getElementById("list2").innerHTML += `<div class="little-container"><p id="left">${name}</p><button id="delete" onclick="Done(this)">삭제</button></div>`;
}

function Done(e){
    e.parentElement.remove();
}
