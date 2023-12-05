// CompleteLottie.jsx
import React from 'react';
import LottieReact from 'lottie-react';

import animationData from '../../assets/complete.json';

export const CompleteLottie = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <LottieReact animationData={animationData} style={{color: 'green'}}/>
    </div>
  );
};
