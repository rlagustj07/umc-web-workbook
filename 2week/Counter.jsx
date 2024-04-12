import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
    console.log('increase가 클릭됨');
  };

  const decrease = () => {
    setCount((count) => count - 1);
    console.log('decrease가 클릭됨');
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default App;
