import React, { useState } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

interface LinkProps {
  page: string;
  children: React.ReactNode;
}

const Link = ({ page, children }: LinkProps) => {
  const [classValue, setClassValue] = useState({ class: STATUS.NORMAL });

  const onMouseEnter = () => {
    setClassValue({ class: STATUS.HOVERED });
  };

  const onMouseLeave = () => {
    setClassValue({ class: STATUS.NORMAL });
  };

  return (
    <a
      className={classValue.class}
      href={page}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
