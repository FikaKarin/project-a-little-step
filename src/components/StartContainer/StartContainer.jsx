import React from 'react';
import { TaskForm } from '../Taskform/TaskForm';
import { About } from '../About/About'; // Import the About component
import styled from 'styled-components';

export const StartContainer = () => {
  return (
    <TopWrapper>
      <About /> {/* Include the About component here */}
      <TaskForm />
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
