import React, { useState, useEffect } from 'react';
import { Lottie } from '../Lottie/Lottie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Welcome = ({ onTimeout }) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onTimeout(navigate); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [onTimeout, navigate]);

  return (
    <>
      {isVisible && (
        <WelcomeWrapper>
          <WelcomeTitle>Welcome to A Little Step!</WelcomeTitle>
          <WelcomeSubtitle>Taking small steps for a big impact.</WelcomeSubtitle>
          <Lottie />
        </WelcomeWrapper>
      )}
    </>
  );
};

const WelcomeWrapper = styled.div`
  max-width: 90%;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20vh; 
`;

const WelcomeTitle = styled.h1`
  margin: 0;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const WelcomeSubtitle = styled.p`
  margin: 15px 0;
  font-size: 1.25rem;
`;

