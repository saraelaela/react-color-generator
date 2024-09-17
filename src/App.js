import {
  ColourCode,
  hexToHsla,
  hexToRgba,
  hslaToHex,
  hslaToHsl,
  hslaToRgba,
  hslToHsla,
  rgbaToHex,
  rgbaToHsla,
  rgbaToRgb,
  rgbToRgba,
} from 'colour-codes';
import { ColorGenerator } from 'hex-color-randomizer';
import { GetColorName } from 'hex-color-to-color-name';
import React, { useState } from 'react';
import ExampleComponents from './ExampleComponents';

export default function App() {
  // line 1, defining states
  const generateRandomColor = ColorGenerator.generateRandomHexColor();
  const [color, setColor] = useState(generateRandomColor);
  const rgbColor = hexToRgba(color).rgbaString;
  const colorName = GetColorName(color);
  const complementaryPalette =
    ColorGenerator.generateComplementaryPalette(color)[1];
  const [isColor, setIsColor] = useState(true);
  const [isComplementaryPalette, setComplementaryPalette] = useState(true);

  // line 2, executing the defined code
  return (
    <>
      <div style={{ display: 'flex', padding: 10 }}>
        <div style={{ flexGrow: 3 }}>
          Sara El Abed <br /> Cohort Fall 2024
        </div>
        <div style={{ flexGrow: 3 }}>
          HEX {color} <br /> {rgbColor}
        </div>
        <div style={{ flexGrow: 3, textAlign: 'right' }}>
          <button
            style={{
              borderColor: 'black',
              borderRadius: 30,
              borderWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor: 'white',
            }}
            onClick={() => setColor(ColorGenerator.generateRandomHexColor())}
          >
            random
          </button>
        </div>
      </div>

      <ExampleComponents
        color={color}
        setColor={setColor}
        colorName={colorName}
        complementaryPalette={complementaryPalette}
      />
    </>
  );
}
