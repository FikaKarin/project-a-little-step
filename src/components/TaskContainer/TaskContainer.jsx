// Import necessary dependencies and components
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import tasksReducer from '../../reducers/tasks';
import { TaskList } from '../../components/TaskList/TaskList';
import { ChosenTaskList } from '../../components/ChosenTaskList/ChosenTaskList';
import { CompletedTaskList } from '../../components/CompletedTasks/CompletedTasks';
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
  return (
    <TaskContainerWrapper>
      <TaskForm />
      <TaskList />
      <ChosenTaskList />
      <CompletedTaskList />
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

  // Adjust the height values as needed
  & > div {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 16px; // Add space between lists
  }
`;
