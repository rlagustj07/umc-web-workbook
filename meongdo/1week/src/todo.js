const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');

const li = document.createElement('li');

// 할 일 입력란에서 Enter 키 입력 시 이벤트
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const task = taskInput.value.trim();
    if (task !== '') {
      const li = document.createElement('li');
      li.textContent = task;
    
      const completeBtn = document.createElement('button');
      completeBtn.innerText = '완료';
      completeBtn.addEventListener('click', function() {
        moveTaskToCompleted(li);
      });
      li.appendChild(completeBtn);
  
      todoList.appendChild(li);
      taskInput.value = '';

      
    } 
  }
});

// 해낸 일 목록으로 이동
function moveTaskToCompleted(taskItem) {
    completedList.appendChild(taskItem);

    const completeBtn = taskItem.querySelector('button');
    completeBtn.remove();

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '삭제';
    taskItem.appendChild(deleteBtn);

    //해낸 일 목록에서 삭제
    deleteBtn.addEventListener('click', function() {
        completedList.removeChild(taskItem);
        const deleteBtn = taskItem.querySelector('button');
        deleteBtn.remove();
      });
}
