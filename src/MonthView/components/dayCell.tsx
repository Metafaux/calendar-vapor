import React from 'react';
import '../../App.css';

interface DayCellProps {
  dayIndex: number;
}

const DayCell = (props: DayCellProps) => {
  return (
    <div className="dayCell">
      <div className="dayCellNumber">{props.dayIndex}</div>
    </div>
  );
};

export default DayCell;
