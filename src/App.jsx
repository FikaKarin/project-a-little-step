import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome/Welcome';
import { Home } from './screens/Home';
import { About } from './components/About/About';
import { StepContainer } from './components/StepContainer/StepContainer';
import { CompletedSteps } from './components/CompletedSteps/CompletedSteps';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './components/theme';
import backgroundImage from './assets/backHome.jpg';

import { configureStore } from '@reduxjs/toolkit';
import stepsReducer from './reducers/steps';

const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});

export const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeTimeout = (navigate) => {
    setShowWelcome(false);
    navigate('/home');
  };

  return (
    <Provider store={store}>
      <GlobalStyles backgroundImage={backgroundImage} />
      <AppContainer>
        <Router>
          <Navbar />
          <main>
            <Routes>
              {showWelcome && (
                <Route
                  path='/'
                  element={<Welcome onTimeout={handleWelcomeTimeout} />}
                />
              )}
              <Route
                path='/welcome'
                element={<Welcome onTimeout={handleWelcomeTimeout} />}
              />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/step-container' element={<StepContainer />} />
              <Route path='/completed-steps' element={<CompletedSteps />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AppContainer>
    </Provider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${(props) => props.backgroundImage}) center;
    background-size: auto auto; 
    background-repeat: repeat; 
  }
`;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  justify-content: space-between; 
`;

