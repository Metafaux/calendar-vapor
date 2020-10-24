import React from 'react';
import logo from './assets/ez_logo.png';
import DayCell from './MonthView/components/dayCell';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EZR+D</p>
      </header>
      <DayCell dayIndex={23} />
    </div>
  );
}

export default App;
