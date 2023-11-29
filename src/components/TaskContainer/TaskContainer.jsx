import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import tasksReducer from '../../reducers/tasks';
import { TaskList } from '../../components/TaskList/TaskList';
import { ChosenTaskList } from '../../components/ChosenTaskList/ChosenTaskList';
import { TaskForm } from '../Taskform/TaskForm';

// Combine reducers
const reducer = combineReducers({
  tasks: tasksReducer,
});

// Configure Redux store
const store = configureStore({
  reducer,
});

// Create a new component to wrap the task-related components
export const TaskContainer = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleGoToCompletedTasks = () => {
    navigate('/completed-tasks');
  };

  return (
    <TaskContainerWrapper>
      <TaskForm />
      <TaskList />
      <ChosenTaskList />

      {/* Button to go back to Home (bottom left corner) */}
      <BottomLeftButton onClick={handleGoHome}>Go Home</BottomLeftButton>

      {/* Button to go to CompletedTasks (bottom right corner) */}
      <BottomRightButton onClick={handleGoToCompletedTasks}>
        Go to Completed Tasks
      </BottomRightButton>
    </TaskContainerWrapper>
  );
};

const TaskContainerWrapper = styled.div`
  display: flex;
  flex-direction: column; // Stack vertically
  padding-left: 16px;
  border-radius: 6px;
  padding-bottom: 8px;
  max-width: 600px;
  margin: 0 auto;
  position: relative; /* Add relative positioning to the container */

  // Adjust the height values as needed
  & > div {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 16px; // Add space between lists
  }
`;

const BottomLeftButton = styled.button`
  position: absolute;
  bottom: 8px;
  left: 8px;
  background-color: #3498db;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BottomRightButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: #2ecc71;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
