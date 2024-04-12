/*const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");

const modal = document.getElementById("modalContainer");


modalBtn.addEventListener('click', () => {
    modal.classList.remove('noDisplay');
  });
  
closeBtn.addEventListener('click', () => {
    modal.classList.add('noDisplay');
  });
  */

  const modalBtn = document.getElementById("modalBtn");
  const closeBtn = document.getElementById("closeBtn");
  const modal = document.getElementById("modalContainer");
  modalBtn.onclick = () => {
    modal.style.display = "block";
  };
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };