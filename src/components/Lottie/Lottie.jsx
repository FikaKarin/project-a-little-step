import React from 'react';
import LottieReact from 'lottie-react';

import animationData from '../../assets/lottie.json';

export const Lottie = () => {
  return (
    <div>
      <LottieReact animationData={animationData} />
    </div>
  );
};
