// StartContainer.jsx
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { About } from '../About/About'; // Import the About component
import styled from 'styled-components';

export const StartContainer = () => {
  // Assuming you have access to completedTasks in your Redux store
  const completedTasks = useSelector(
    (state) => state.tasks.completedTasks || []
  );

  return (
    <TopWrapper>
      <About />
      <LinkContainer>
        <StyledLink to='/task-container'>Go to Task Container</StyledLink>
      </LinkContainer>
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  background-color: #ffffff8f;
  padding: 6px;
  margin: 16px 0px;
  border-radius: 4px;
  box-shadow: -2px 1px 4px #0000009b;
  max-width: 350px;
  margin: 0 auto;
  position: relative; /* Make the container position relative */
`;

const LinkContainer = styled.div`
display: flex;
justify-content: flex-end;
`

// Styled component for the Link
const StyledLink = styled(Link)`
  display: flex;
  width: 200px;
  bottom: 16px; /* Adjust the bottom position as needed */
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  justify-content: flex-end;

  &:hover {
    background-color: #2980b9;
  }
`;
