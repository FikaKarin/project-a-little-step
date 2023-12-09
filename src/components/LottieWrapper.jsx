import React, { useEffect } from 'react';
import { Lottie } from '../components/Lottie/Lottie';

export const LottieWrapper = ({ onTimeout }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout(); // Redirect to the specified route after the timeout
    }, 5000);

    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div>
      <Lottie />
    </div>
  );
};

