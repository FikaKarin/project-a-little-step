import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import tasksReducer from '../reducers/tasks';
import { StartContainer } from '../components/StartContainer/StartContainer';
import { HeaderContainer } from '../components/HeaderContainer/HeaderContainer';

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
      <div>
        <HeaderContainer />
        <HomeWrapper>
          <StartContainer />
        </HomeWrapper>
      </div>
    </Provider>
  );
};

// Styled component for the HomeWrapper
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
  padding: 8px;

  @media (max-width: 280px) {
    padding: 0;
  }
`;


