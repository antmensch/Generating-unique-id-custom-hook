import React from 'react';
import './App.css';
import Checkbox from './cmp/checkbox/Checkbox';
import useViewport from './hooks/useViewport';

function App() {
  return (
    <div className="App">
      <Checkbox />
      <p>The current width of the screen is {useViewport()}px</p>
    </div>
  );
}

export default App;
