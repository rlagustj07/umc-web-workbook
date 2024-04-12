import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo(inputValue);
    }
  };


  const addTodo = (content) => {
    setInputValue('');
    setTodos(prevTodos => ([
      ...prevTodos,
      { id: prevTodos.length + 1, content: content, isDone: false }
    ]));
  };

  const removeTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  return (
   <div className="box">
        <h1 className="title">UMC Study Plan</h1>
        <hr style={{borderTop:"1px solid lightgray"}}/>
        <br></br>
        <div className="center">
            <input type="text" className="input" id="text" placeholder="UMC 스터디 계획을 작성해보세요!"
            value={inputValue} 
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}></input>
            <br></br><br></br>

            <div className='width'>
            <div className="flex-container">
                <div id="list1">
                    <h4>해야 할 일</h4><br></br>
   
                  {todos.filter(todo => !todo.isDone).map(todo => (
                    <div className="little-container" key={todo.id}>
                      <p id="left">{todo.content}</p>
                      <button id="delete" onClick={() => removeTodo(todo.id)}>완료</button>
                    </div>
                  ))}
                </div>
                

                <div id="list2">
                    <h4>해낸 일</h4><br></br>

                    {todos.filter(todo => todo.isDone).map(todo => (
                      <div className="little-container" key={todo.id}>
                        <p id="left">{todo.content}</p>
                        <button id="delete" onClick={() => deleteTodo(todo.id)}>삭제</button>
                      </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
        
   </div>
  )
}

export default App
