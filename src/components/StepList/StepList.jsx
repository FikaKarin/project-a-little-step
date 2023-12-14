import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  toggleStepChosen,
  undoRemoveStep,
  startNewDay,
} from '../../reducers/steps';

import { StepListHeader } from '../StepListHeader/StepListHeader';
import { StepListItem } from '../StepListItem/StepListItem';

export const StepList = () => {
  const allSteps = useSelector((state) => state.steps.allSteps);
  const chosenToday = useSelector((state) => state.steps.chosenSteps);
  const dispatch = useDispatch();
  const [newStep, setNewStep] = useState({ text: '', dueDate: null });
  const [showChosen, setShowChosen] = useState(false);
  const [showUnchosen, setShowUnchosen] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [createdAfterDate, setCreatedAfterDate] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem('chosenSteps');
    if (savedState) {
      dispatch({
        type: 'LOAD_CHOSEN_STEPS',
        payload: JSON.parse(savedState),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('chosenSteps', JSON.stringify(allSteps));
  }, [allSteps]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getDay() !== parseInt(localStorage.getItem('currentDay'), 10)) {
        dispatch(startNewDay());
        localStorage.setItem('currentDay', now.getDay().toString());
      }
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleToggleChosen = (stepId) => {
    dispatch(toggleStepChosen(stepId));
  };
  

  const handleUndoRemoveStep = () => {
    dispatch(undoRemoveStep());
  };

  return (
    <StepListWrapper>
      <StepListHeader
        title='Steps'
        count={allSteps.length}
        chosenToday={chosenToday}
      />
      <ul>
        {allSteps
          .slice()
          .reverse()
          .filter(
            (step) =>
              (showAll ||
                (!showChosen && !step.chosen) ||
                (showChosen && step.chosen)) &&
              (showAll ||
                (!showUnchosen && step.chosen) ||
                (showUnchosen && !step.chosen))
          )
          .filter(
            (step) =>
              !createdAfterDate || new Date(step.createdAt) > createdAfterDate
          )
          .map((step) => {
            return (
              <StepListItem
                key={`${step.id}-${step.step}`}
                step={step}
                handleToggleChosen={handleToggleChosen}
                handleUndoRemoveStep={handleUndoRemoveStep}
              />
            );
          })}
      </ul>
    </StepListWrapper>
  );
};

const StepListWrapper = styled.div`
  flex: 1;
  max-height: 400px; /* Set maximum height */
  overflow-y: auto; /* Add vertical scrollbar if needed */
  overflow-x: hidden; /* Hide horizontal scrollbar */  
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 650px;
  width: 100%;

  ul {
    list-style: none;
    padding: 15px 0px;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 100%;
    box-sizing: border-box;

    &:last-child {
      margin-bottom: 0;
    }

    input {
      margin-right: 8px;
    }

    label {
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      color: black;
    }
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 420px) {
    h2,
    p {
      font-size: 95%;
    }
  }
`;
