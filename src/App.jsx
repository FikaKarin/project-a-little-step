// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome/Welcome';
import { Home } from './screens/Home';
import { About } from './components/About/About';
import { TaskContainer } from './components/TaskContainer/TaskContainer';
import { CompletedTasks } from './components/CompletedTasks/CompletedTasks';
import { Navbar } from './components/Navbar/Navbar';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './components/theme';
import backgroundImage from './assets/backHome.jpg';

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
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
        <Footer />
      </AppContainer>
    </Provider>
  );
};

const GlobalStyles = createGlobalStyle<{ backgroundImage: string }>`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    min-height: 100vh;
    background: url(${(props) => props.backgroundImage}) center/cover; // Set background image
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>&copy; 2023 A Little Step. All rights reserved.</Copyright>
      <ContactInfo>
        <div>123 Main Street, City</div>
        <div>Email: info@example.com</div>
        <div>Phone: (123) 456-7890</div>
      </ContactInfo>
      <SocialMediaLinks>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook'></i>
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter'></i>
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </SocialMediaLinks>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #304b3037;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Copyright = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  font-size: 10px;
`;

const SocialMediaLinks = styled.div`
  font-size: 20px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: #ccc;
    }
  }
`;
