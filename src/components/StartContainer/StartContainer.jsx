import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../About/About'; // Import the About component
import styled from 'styled-components';
import { colors } from '../theme';

export const StartContainer = () => {

  return (
    <TopWrapper>
      <About />
      <LinkContainer>
        <StyledLink to='/step-container'>Get Started</StyledLink>
      </LinkContainer>
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  padding: 12px;
  border-radius: 4px;
  box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin: 0 auto;
  position: relative;
  background-color: white;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: flex;
  bottom: 16px;
  padding: 8px 16px;
  color: #fff;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  font-weight: 400;
  justify-content: flex-end;
  transition: 0.1s ease-in;
  border: 0.5px solid grey;
  background-color: white;

  &:hover {
    background-color: #45a049a6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: white;
    border: none;
  }
`;
