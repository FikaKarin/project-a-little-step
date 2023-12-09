import React from 'react';
import { useNavigate } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import tasksReducer from '../../reducers/tasks';
import { TaskList } from '../../components/TaskList/TaskList';
import { ChosenTaskList } from '../../components/ChosenTaskList/ChosenTaskList';
import { TaskForm } from '../Taskform/TaskForm';
import { colors } from '../theme';
import { GoodLottie } from '../GoodLottie/GoodLottie';

// Add this line to import Container
const Container = styled.div`
  max-width: 800px; /* Adjust the max-width to your preference */
  margin: 0 auto;
`;

// Combine reducers
const reducer = combineReducers({
  tasks: tasksReducer,
});

// Configure Redux store
const store = configureStore({
  reducer,
});

export const TaskContainer = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleGoToCompletedTasks = () => {
    navigate('/completed-tasks');
  };

  return (
    <Container>
      <TaskContainerWrapper>
        <TaskForm />
        <TaskList style={{ marginBottom: '24px' }} />
        <ChosenTaskList style={{ marginBottom: '24px' }} />

        <BottomButtonsWrapper>
          {/* Button to go back to Home (bottom left corner) */}
          <BottomLeftButton onClick={handleGoHome}>Go Home</BottomLeftButton>

          {/* Button to go to CompletedTasks (bottom right corner) */}
          <BottomRightButton onClick={handleGoToCompletedTasks}>
            Acheievements
          </BottomRightButton>
        </BottomButtonsWrapper>
      <GoodLottie />
      </TaskContainerWrapper>
    </Container>
  );
};

const TaskContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  max-width: 700px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
`;

const BottomButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%; /* Take up the full width of the container */
  /* Position the buttons at the bottom */
  bottom: 0;
  left: 0;
  right: 0;
`;

const BottomLeftButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 420px) {
    font-size: 14px; /* Adjust font size for smaller screens */
    padding: 6px;
  }
`;

const BottomRightButton = styled.button`
  background-color: #45a049a6;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  @media (max-width: 420px) {
    font-size: 14px; /* Adjust font size for smaller screens */
    padding: 6px;
  }
`;
