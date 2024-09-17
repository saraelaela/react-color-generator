import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function ColorTest() {
  const YourComponent = () => {
    const [color, setColor] = useState('#aabbcc');
    return (
      <>
        <div>hey</div>
        <input></input>
        <HexColorPicker color={color} onChange={setColor} />
      </>
    );
  };
}
