import React, { useState, useEffect } from 'react';

export const Welcome = ({ onTimeout }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onTimeout();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: isVisible ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ margin: '0' }}>Welcome to A Little Step!</h1>
      <p style={{ margin: '10px 0', fontSize: '16px' }}>Taking small steps for a big impact.</p>
    </div>
  );
};

