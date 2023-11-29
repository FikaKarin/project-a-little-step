// StartContainer.jsx
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
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
`;
