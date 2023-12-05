// CompletedTaskPopup.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { CompleteLottie } from '../CompleteLottie/CompleteLottie'; // Import your CompleteLottie component
import { colors } from '../theme';

export const CompletedTaskPopup = ({ task, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return isVisible ? (
    <PopupWrapper>
      <CheckIcon />
      <p>{task}</p>
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
  z-index: 9999; // Set a high z-index value
  width: 70%; // Adjust the width as needed
  max-height: 100%; // Set a max height

  @media (max-width: 600px) {
    width: 90%; // Adjust the width for smaller screens
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  color: ${colors.primary};
  font-size: 48px; // Adjust the size as needed
  margin-bottom: 16px; // Add margin to separate the icon from the text
`;
