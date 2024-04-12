import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const [inputValue, setInputValue] = useState('');

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const AddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { id: nextId, content: inputValue, isDone: false };
      setTodos([...todos, newTodo]); //...앞서 만든 객체 + 새로운 객체 추가 - todos
      setInputValue('');
      setNextId(nextId + 1);
      console.log(newTodo);
    }
  };

  const KeyPress = (event) => {
    if (event.key === 'Enter') {
      AddTodo();
    }
  };

  const CompleteTodo = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    completedTodo.isDone = true;
    setCompletedTodos([...completedTodos, completedTodo]);
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(completedTodo);
  };

  const DeleteCompletedTodo = (id) => {
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="title">UMC Study Plan</div>
      <div className="line"></div>
      <div className="block">
        <input
          type="text"
          className="taskInput"
          value={inputValue}
          onChange={InputChange}
          onKeyPress={KeyPress}
          placeholder="스터디 계획을 작성해보세요!"
        />
        <div className="container">
          <div className="lists">
            <h3>해야 할 일</h3>
            <div className="short1"></div>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.content}</span>
                  <button onClick={() => CompleteTodo(todo.id)}>완료</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lists">
            <h3>해낸 일</h3>
            <div className="short2"></div>
            <ul>
              {completedTodos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.content}</span>
                  <button onClick={() => DeleteCompletedTodo(todo.id)}>
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
