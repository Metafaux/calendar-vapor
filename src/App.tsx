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
      <div className="rowDiv">
        <DayCell dayIndex={23} inProp={true} />
        <DayCell dayIndex={24} inProp={true} />
        <DayCell dayIndex={25} inProp={true} />
        <DayCell dayIndex={26} inProp={true} />
      </div>
    </div>
  );
}

export default App;
