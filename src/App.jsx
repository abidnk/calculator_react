import React from 'react';
import './App.css';
import Calculator from './calculator';
import Input from './Input';


function App() {
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <Calculator/> {/* Render the Calculator component here */}
      <Input/>
    </div>
  );
}

export default App;
