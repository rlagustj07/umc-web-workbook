const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal");

modal.style.display = "none";

open.onclick = () => {
    modal.style.display = "flex";
};

close.onclick = () => {
    console.log("close working");
    modal.style.display = "none";
};