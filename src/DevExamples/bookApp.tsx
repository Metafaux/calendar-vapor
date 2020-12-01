import React, { useState, useEffect } from 'react';
import logo from '../assets/ez_logo.png';
import Confirm from './confirm';
import './App.css';

const BookApp = () => {
  const [confirmMessage, setConfirmMessage] = useState(
    'Please hit the confirm button'
  );
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmVisible, sestConfirmVisible] = useState(true);
  const [countDown, setCountdown] = useState(10);

  useEffect(() => {
    console.log('Running App.tsx useEffect');
    const timer = setInterval(() => {
      setCountdown((countDown) => countDown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleConfirmClick = () => {
    setConfirmOpen(true);
  };

  const handleCancelConfirmClick = () => {
    setConfirmMessage("Take a break, I'm sure you will later...");
    setConfirmOpen(false);
  };

  const handleOkConfirmClick = () => {
    setConfirmMessage('Can we get back to WORK');
    setConfirmOpen(false);
  };

  // const handleTimerTick = () => {
  //   setConfirmMessage(countDown + ' seconds to go')
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EZR+D</p>
      </header>
      <p>{countDown} seconds to go</p>
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

export default BookApp;
