import { hexToRgba } from 'colour-codes';
import { ColorGenerator } from 'hex-color-randomizer';
import { GetColorName } from 'hex-color-to-color-name';
import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import ExampleComponents from './ExampleComponents';

export default function App() {
  const generateRandomColor = () => ColorGenerator.generateRandomHexColor();

  // 02) States for color and input
  const [color, setColor] = useState(generateRandomColor()); // Initial color
  const [inputField, setInputField] = useState(color); // Tracks user input for the input field
  const [rgbColor, setRgbColor] = useState(hexToRgba(color).rgbaString); // Convert color to RGBA string
  const [complementaryPalette, setComplementaryPalette] = useState(null); // Complementary color palette

  // Handle color updates whenever `color` changes
  useEffect(() => {
    // color is set to HEX, convert it to RGBa
    setRgbColor(hexToRgba(color).rgbaString);
    // convert it to complementary color
    setComplementaryPalette(
      ColorGenerator.generateComplementaryPalette(color)[1],
    );
  }, [color]);

  // Setting the color state when the input is a valid full 6-character hex color
  const handleInputChange = (event) => {
    const userInput = event.currentTarget.value;

    // Update the input field with the user input
    setInputField(userInput);

    // Use updateColor to progressively update the color
    const updatedColor = updateColor(color, userInput);

    if (updatedColor.length === 7) {
      // Including the '#'
      setColor(updatedColor);
    }
  };

  // Function to progressively update the color based on user input
  function updateColor(existingColor, userInput) {
    const baseColor = existingColor.replace('#', ''); // Existing color without the '#'
    const newInput = userInput.replace('#', ''); // User input without the '#'

    // Combine user input with remaining characters from the existing color
    const updatedColor = newInput + baseColor.slice(newInput.length);

    // Ensure the final color is 6 characters long
    return `#${updatedColor.slice(0, 6)}`;
  }

  return (
    <>
      <div style={{ display: 'flex', padding: 10 }}>
        <div style={{ flexGrow: 3 }}>
          Sara El Abed <br /> Cohort Fall 2024
        </div>
        <div style={{ flexGrow: 3 }}>
          HEX {color} <br />
          <input
            value={inputField} // Display the input value
            onChange={handleInputChange} // Handle changes and update the color progressively
            placeholder="#XXXXXX"
          />
          <br /> {rgbColor}
        </div>
        <div style={{ flexGrow: 3, textAlign: 'right' }}>
          <button
            className={styles.buttonHover}
            style={{
              borderColor: 'black',
              borderRadius: 30,
              borderWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 8,
              paddingBottom: 8,
            }}
            onClick={() => {
              const randomColor = generateRandomColor();
              setInputField(randomColor); // Update input value with random color
              setColor(randomColor); // Update the color state with random color
            }}
          >
            Generate
          </button>
        </div>
      </div>

      <ExampleComponents
        color={color}
        setColor={setColor}
        colorName={GetColorName(color)}
        complementaryPalette={complementaryPalette}
      />
    </>
  );
}
