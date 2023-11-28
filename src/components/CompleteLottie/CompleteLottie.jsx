// Lottie.jsx
import React from 'react';
import LottieReact from 'lottie-react'; // Update the import

import animationData from '../../assets/complete.json';

export const CompleteLottie = () => {
  return (
    <div>
      <LottieReact animationData={animationData} />
    </div>
  );
};

