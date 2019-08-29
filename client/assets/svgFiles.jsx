import React from 'react';
import { ReactComponent as Back } from './back.svg';
import { ReactComponent as Next } from './next.svg';

const svg = {
  Back: () => <Back id="next-svg" />,
  Next: () => <Next id="back-svg" />,
};

export default svg;
