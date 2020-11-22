import React, { useState } from 'react';
// import anime from 'animejs';
import Transition from 'react-transition-group/Transition';

interface AComponentProps {
  inProp: boolean;
}

// https://alligator.io/react/react-transition-group/

const TIMEOUT_TRANSITIONS = {
  appear: 500,
  enter: 300,
  exit: 400,
};

// if inProp is true, component in 'entering' state
// if inProp is false, component in 'exiting' state
const AComponent = ({ inProp }: AComponentProps) => {
  return (
    <Transition in={inProp} timeout={500} unmountOnExit>
      {(state) => <div>I am {state}</div>}
    </Transition>
  );
};

export default AComponent;
