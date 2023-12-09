// AchieveLottie.jsx
import React from 'react';
import LottieReact from 'lottie-react';

import animationData from '../../assets/achievement.json';

export const AchieveLottie = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <LottieReact animationData={animationData} />
    </div>
  );
};
