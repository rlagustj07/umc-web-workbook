import React, { useState, KeyboardEvent} from 'react';
import "./index.css";

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue
      };
      setTodos(prevTodos => [...prevTodos, newTodo]); //preTodos에 newTodo 객체 추가
      setInputValue(''); // 입력값을 비움
    }
  };

  const handleComplete = (id) => {
    const completedTodo = todos.find(todo => todo.id === id);
    setCompletedTodos(prevCompletedTodos => [...prevCompletedTodos, completedTodo]);
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // 매개변수로 받은 id와 일치하지 않는 것은 남기고 나머지 제거
  };

  const handleDelete = (id) => {
    setCompletedTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // 매개변수로 받은 id와 일치하지 않는 것은 남기고 나머지 제거 

};

const handleKeyPress = e => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSubmit(e);
  }
};


  return (
    <div>
      <h1 className='Title'>UMC Study Plan</h1>
      <form className='Inputbox' onSubmit={handleSubmit}>
        <input
          className='Input'
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="UMC 스터디 계획을 작성해보세요!"
          onKeyPress={handleKeyPress}
        />
      </form>
      <div className='List'>
        <ul className='Todolist'>
        <h2>해야 할 일</h2>
          {todos.map(todo => (
            <li className='listStyle' key={todo.id}>
              {todo.text}
              <button onClick={() => handleComplete(todo.id)}>완료</button>
            </li>
          ))}
        </ul>
        <ul className='Completedlist'>
          <h2>해낸 일</h2>
          {completedTodos.map(todo => (
            <li className='listStyle' key={todo.id}>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
