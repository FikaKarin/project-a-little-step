import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { About } from '../About/About'; // Import the About component
import styled from 'styled-components';
import { colors } from '../theme';

export const StartContainer = () => {
  // Assuming you have access to completedTasks in your Redux store
  const completedTasks = useSelector(
    (state) => state.tasks.completedTasks || []
  );

  return (
    <TopWrapper>
      <About />
      <LinkContainer>
        <StyledLink to='/task-container'>Get Started</StyledLink>
      </LinkContainer>
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  background-color: ${colors.background};
  padding: 12px;
  border-radius: 4px;
  box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin: 0 auto;
  position: relative;
  opacity: 0.9;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: flex;
  bottom: 16px;
  padding: 8px 16px;
  background-color: ${colors.background};
  color: #fff;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  font-weight: 400;
  justify-content: flex-end;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 0.5px solid grey;

  &:hover {
    background-color: ${colors.secondary};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
