
import './App.css';
import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    console.log("increase가 클릭됨");
  };

  const decrease = () => {
    setCounter(counter - 1);
    console.log("decrease가 클릭됨");
  };

  return (
    <div className='counterContainer'>
      <h2>{counter}</h2>
      <button className='increase' onClick={increase}>+</button>
      <button className='decrease' onClick={decrease}>-</button>

    </div>
  );
}

export default App;