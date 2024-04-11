import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log("increase 가 클릭됨");
    setCount(count+1);
  };

  const decrease = () => {
    console.log("decrease 가 클릭됨");
    setCount(count-1);
  }

  return (
    <div>
      <h2 id="number">{count}</h2>
      <button id="increase" onClick={increase}>+1</button>
      <button id="decrease" onClick={decrease}>-1</button>
    </div>
  )
}

export default App
