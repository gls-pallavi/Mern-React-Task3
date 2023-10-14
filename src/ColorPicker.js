import React, { useState } from 'react';
import './App.css';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#4caf50');
  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker-container" style={{ backgroundColor: 'lightpink' }}>
      <div className="color-list" style={{ display: showColors ? 'flex' : 'none' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-square"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelection(color)}
          ></div>
        ))}
      </div>
      <button
        className="color-button"
        style={{ backgroundColor: selectedColor, marginTop: '20px' }}
        onClick={() => setShowColors(!showColors)}
      >
        Pick a color
      </button>
    </div>
  );
};

export default ColorPicker;
