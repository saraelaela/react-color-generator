import { useState } from 'react';

export default function ExampleStateColor() {
  const [count, setCount] = useState(0);
  const colorValue = Math.floor(Math.random() * 100000);
  const hexColor = '#' + count;
  return (
    <div style={{ backgroundColor: hexColor }}>
      <div>{hexColor} </div>
      <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        // type="number"
      />
      <button onClick={() => setCount(count + colorValue)}>random</button>

      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
    </div>
  );
}
