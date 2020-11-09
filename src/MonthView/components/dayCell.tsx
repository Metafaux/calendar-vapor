import React from 'react';
// import anime from 'animejs';
import Transition from 'react-transition-group/Transition';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import '../../App.css';

interface DayCellProps {
  dayIndex: number;
  inProp: boolean;
}

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles: {[key: string]: {opacity: number}} = {
  ['entering']: { opacity: 0 },
  ['entered']:  { opacity: 1 },
  ['exiting']:  { opacity: 0 },
  ['exited']:  { opacity: 0 },
};

const DayCell = (props: DayCellProps) => {
  return (
    <Transition in={props.inProp} appear={true} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]}}>
          <div className="dayCell">
            <div className="dayCellNumber">{props.dayIndex}</div>
          </div>
        </div>
    )}
    </Transition>
  );
};

export default DayCell;
