import React, { useState } from 'react';

// Demonstration file for Jest, Enzyme, react-testing-library
// Not used in Calendar

interface CheckboxWithLabelProps {
  labelOn: string;
  labelOff: string;
}

const CheckboxWithLabel = ({ labelOn, labelOff }: CheckboxWithLabelProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const onInputChange = () => setIsChecked(!isChecked);

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onInputChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};

export default CheckboxWithLabel;
