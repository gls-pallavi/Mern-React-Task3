
import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#F70D1A', '#66FF00', '#2916F5', '#F1FF33', '#F433FF', '#57FEFF', '#F6BE00', '#800080', '#FFB6C1', '#347C17', '#FF7900', '#43BFC7', '#A0522D', '#FF8C00', '#007C80', '#FFDF00' ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 className="heading" >Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
