import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/task-container">Go to Task Container</Link>
        </HomeWrapper>
      </div>
    </Provider>
  );
};

// Styled component for the HomeWrapper
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* background-image: url('https://images.unsplash.com/photo-1454944338482-a69bb95894af?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  object-fit: contain; */
  margin: 0 auto;
  max-width: 900px;
  padding: 8px;

  @media (max-width: 280px) {
    flex-direction: column;
    align-items: center;
    background-image: none;
    padding: 0;
  }
`;
