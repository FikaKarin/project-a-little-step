// Lottie.jsx
import React from 'react';
import LottieReact from 'lottie-react'; // Update the import

import animationData from '../../assets/lottie.json';

export const Lottie = () => {
  return (
    <div>
      <LottieReact animationData={animationData} />
    </div>
  );
};
