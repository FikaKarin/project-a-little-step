import React from 'react';
import styled from 'styled-components';
import { StartContainer } from '../components/StartContainer/StartContainer';
import { colors } from '../components/theme';
import backgroundImage from '../assets/backHome.jpg';

export const Home = () => {
  return (
    <StyledHomeWrapper>
      <StartContainer />
    </StyledHomeWrapper>
  );
};

const StyledHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 700px;
  padding: 36px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  background: url(${backgroundImage}) center/cover;
  min-height: 100vh;  // Use min-height instead of height
  flex: 1; // Use flex: 1 to take up all available vertical space

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 620px) {
    background: none; 
    padding: 16px;
  }
`;
