import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { colors } from '../theme';

export const CompletedStepPopup = ({ step, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return isVisible ? (
    <PopupWrapper>
      <CheckIcon />
      <PopupContent>
        <p>{step}</p>
      </PopupContent>
    </PopupWrapper>
  ) : null;
};

const PopupWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
  max-width: 350px;
  width: 70%; 
  word-wrap: break-word;
  white-space: pre-line;

  @media (max-width: 600px) {
    width: 90%; 
  }
`;

const PopupContent = styled.div`
  max-width: 100%;
  width: 100%;
  overflow-wrap: break-word; /* Allow breaking of long words */
  word-wrap: break-word; /* Fallback for older browsers */

  p {
    margin: 0;
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  color: ${colors.primary};
  font-size: 48px; 
  margin-bottom: 16px; 
`;
