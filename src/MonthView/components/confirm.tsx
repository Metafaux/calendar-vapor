import React, { useState, useEffect } from 'react';

interface ConfirmProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

// https://github.com/carlrip/LearnReact17WithTypeScript/blob/master/03-GettingStartedWithReactAndTypeScript/02-ConfirmComponent/src/Confirm.tsx

const Confirm = (props: ConfirmProps) => {
  const [cancelClickCount, setCancelClickCount] = useState(0);

  console.log('Confirm rendering');

  useEffect(() => {
    console.log('Confirm first rendering');
    return () => {
      console.log('Confirm unmounted');
    };
  }, []);

  const handleOkClick = () => {
    props.onOkClick();
  };

  const handleCancelClick = () => {
    const newCount = cancelClickCount + 1;
    setCancelClickCount(newCount);
    if (newCount >= 2) {
      props.onCancelClick();
    }
  };

  return (
    <div
      className={
        props.open ? 'confirm-wrapper confirm-visible' : 'confirm-wrapper'
      }
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{props.title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel" onClick={handleCancelClick}>
            {cancelClickCount === 0 ? props.cancelCaption : 'Really?'}
          </button>
          <button className="confirm-ok" onClick={handleOkClick}>
            {props.okCaption}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
