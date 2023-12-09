// GoodLottie.jsx
import React from 'react';
import LottieReact from 'lottie-react';

import animationData from '../../assets/good.json';

export const GoodLottie = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <LottieReact animationData={animationData} />
    </div>
  );
};
