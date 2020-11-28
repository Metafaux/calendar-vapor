import React, { useState } from 'react';
import logo from './assets/ez_logo.png';
import DayCell from './MonthView/components/dayCell';
import Confirm from './MonthView/components/confirm';
import './App.css';
import { ListSubheader } from '@material-ui/core';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>EZR+D</p>
//       </header>
//       <div className="rowDiv">
//         <DayCell dayIndex={23} inProp={true} />
//         <DayCell dayIndex={24} inProp={true} />
//         <DayCell dayIndex={25} inProp={true} />
//         <DayCell dayIndex={26} inProp={true} />
//       </div>
//     </div>
//   );
// }

// interface AppProps {
//   confirmOpen: boolean;
//   confirmMessage: string;
//   confirmVisible: boolean;
//   countDown: number;
// }

const App = () => {
  const [timer, setTimer] = useState(0);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmVisible, sestConfirmVisible] = useState(true);
  const [countDown, setCountdown] = useState(10);

  const handleConfirmClick = () => {
    setConfirmOpen(true);
  };

  const handleCancelConfirmClick = () => {
    setConfirmMessage("Take a break, I'm sure you will ListSubheader...");
  };

  const handleOkConfirmClick = () => {};

  const handleTimerTick = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EZR+D</p>
      </header>
      <p>{confirmMessage}</p>
      {confirmVisible && <button onClick={handleConfirmClick}>Confirm</button>}
      {countDown > 0 && (
        <Confirm
          open={confirmOpen}
          title="React and TypeScript"
          content="Are you sure you want to learn React and TypeScript?"
          cancelCaption="No way"
          okCaption="Yes please"
          onCancelClick={handleCancelConfirmClick}
          onOkClick={handleOkConfirmClick}
        />
      )}
    </div>
  );
};

export default App;
