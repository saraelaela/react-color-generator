import { ColorGenerator } from 'hex-color-randomizer';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import ExampleComponents from './ExampleComponents';

export default function App() {
  // line 1, defining states
  const generateRandomColor = ColorGenerator.generateRandomHexColor();
  const [color, setColor] = useState(generateRandomColor);

  // line 2, executing the defined code
  return (
    <>
      <div>
        <div>Info 1</div>
        <div>Info 2</div>
        <div>Info 3</div>
      </div>
      <button onClick={() => setColor(ColorGenerator.generateRandomHexColor())}>
        random
      </button>

      <ExampleComponents color={color} setColor={setColor} />
    </>
  ); // 1. create a state component inside the parent
}

// export default function App() {
//   const [color, setColor] = useState('#b32aa9');
//   const [newColor, setNewColor] = useState({ color });
//   };

//   return (
//     <div className="App">
//       <HexColorPicker color={color} onChange={setColor} />

//       <input
//         value={color}
//         onChange={(event) =>} // Use onChange to capture input changes
//       />
//       <div>{newColor}</div>

//       <div className="buttons">
//         <button onClick={() => setColor('#c6ad23')}>Choose gold</button>
//         <button onClick={() => setColor('#556b2f')}>Choose green</button>
//         <button onClick={() => setColor('#207bd7')}>Choose blue</button>
//       </div>
//     </div>
//   );
// }
