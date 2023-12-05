import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import tasksReducer from '../reducers/tasks';
import { StartContainer } from '../components/StartContainer/StartContainer';
import { colors } from '../components/theme';
import backgroundImage from '../assets/backHome.jpg'; // Import your background image

// Combine reducers
const reducer = combineReducers({
  tasks: tasksReducer,
});

// Configure Redux store
const store = configureStore({
  reducer,
});

// Home component that uses the TaskContainer
export const Home = () => {
  return (
    <Provider store={store}>
      <StyledHomeWrapper>
        <StartContainer />
      </StyledHomeWrapper>
    </Provider>
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
  background-color: ${colors.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  background: url(${backgroundImage}) center/cover; // Set background image
  height: 100vh; /* Set the entire viewport height */

  &:hover {
    transform: scale(1.01);
  }
`;