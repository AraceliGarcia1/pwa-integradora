import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const coloresMultiple = () => {
  const [selectedColores, setSelectedColores] = useState([]);

  const handleColorChange = (color, event) => {
    setSelectedColores([...selectedColores, color.hex]);
  };

  return (
    <div>
      <h2>Selecciona colores:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedColores.map((color, index) => (
          <div key={index} style={{ backgroundColor: color, width: '30px', height: '30px', margin: '5px', border: '1px solid black' }}></div>
        ))}
      </div>
      <ChromePicker onChange={handleColorChange} />
    </div>
  );
};

export default coloresMultiple;
