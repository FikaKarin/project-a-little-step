import React from 'react';
import { useNavigate } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';
import stepsReducer from '../../reducers/steps';
import { StepList } from '../StepList/StepList';
import { ChosenStepList } from '../ChosenStepList/ChosenStepList';
import { StepForm } from '../Stepform/StepForm';
import { colors } from '../theme';
import { GoodLottie } from '../GoodLottie/GoodLottie';

const Container = styled.div`
  max-width: 800px; /* Adjust the max-width to your preference */
  margin: 0 auto;
`;

// Combine reducers
const reducer = combineReducers({
  steps: stepsReducer,
});

// Configure Redux store
const store = configureStore({
  reducer,
});

export const StepContainer = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleGoToCompletedSteps = () => {
    navigate('/completed-steps');
  };

  return (
    <Container>
      <StepContainerWrapper>
        <StepForm />
        <StepList style={{ marginBottom: '24px' }} />
        <ChosenStepList style={{ marginBottom: '24px' }} />

        <BottomButtonsWrapper>
          <BottomLeftButton onClick={handleGoHome}>Go Home</BottomLeftButton>

          <BottomRightButton onClick={handleGoToCompletedSteps}>
            Achievements
          </BottomRightButton>
        </BottomButtonsWrapper>
      <GoodLottie />
      </StepContainerWrapper>
    </Container>
  );
};

const StepContainerWrapper = styled.div`
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
  background-color: blue;
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

const BottomRightButton = styled.button`
  background-color: green;
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
