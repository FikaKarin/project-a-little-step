// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome/Welcome';
import { Home } from './screens/Home';
import { About } from './components/About/About';
import { TaskContainer } from './components/TaskContainer/TaskContainer';
import { CompletedTasks } from './components/CompletedTasks/CompletedTasks';
import styled, { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle
import { colors } from './components/theme';
import backgroundImage from './assets/backHome.jpg'; // Import your background image


// Import your Redux store
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks'; // Update the path accordingly

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// App component wrapped with the Provider
export const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeTimeout = (navigate) => {
    setShowWelcome(false);
    navigate('/home');
  };

  return (
    <Provider store={store}>
      <GlobalStyles backgroundImage={backgroundImage} />
      <Router>
        <Routes>
          {showWelcome && (
            <Route
              path='/'
              element={<Welcome onTimeout={handleWelcomeTimeout} />}
            />
          )}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/task-container' element={<TaskContainer />} />
          <Route path='/completed-tasks' element={<CompletedTasks />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    min-height: 100vh;
    background: url(${(props) => props.backgroundImage}) center/cover; // Set background image
  }
`;
