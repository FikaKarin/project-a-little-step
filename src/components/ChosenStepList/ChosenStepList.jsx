import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { completeStep, undoChosenStep } from '../../reducers/steps';
import { FaCheckCircle, FaUndo } from 'react-icons/fa';
import { CompletedStepPopup } from '../CompletedStepPopUp/CompletedStepPopUp';

export const ChosenStepList = () => {
  const dispatch = useDispatch();
  const chosenSteps = useSelector((state) => state.steps.chosenSteps || []);
  const [completedStepPopup, setCompletedStepPopup] = React.useState(null);

  const handleCompleteStep = (stepId, stepName) => {
    dispatch(completeStep({ stepId }));
    setCompletedStepPopup({
      key: stepId,
      step: stepName,
      onComplete: () => setCompletedStepPopup(null),
    });
  };

  const handleUndoChosenStep = (stepId) => {
    dispatch(undoChosenStep({ stepId }));
  };

  return (
    <ChosenStepListWrapper>
      <h2>Chosen ({chosenSteps.length})</h2>
      {completedStepPopup && <CompletedStepPopup {...completedStepPopup} />}
      {chosenSteps.length > 0 ? (
        <ul>
          {chosenSteps.map((step) => (
            <li key={step.id}>
              <ChosenStepText>{step.step}</ChosenStepText>
              <ButtonWrapper>
                <FaCheckCircleStyled
                  onClick={() => handleCompleteStep(step.id, step.step)}
                />
                <FaUndoStyled onClick={() => handleUndoChosenStep(step.id)} />
              </ButtonWrapper>
            </li>
          ))}
        </ul>
      ) : (
        <p>No chosen steps yet.</p>
      )}
    </ChosenStepListWrapper>
  );
};

const ChosenStepListWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 0 6px;
  /* background-color: #ffff0015; */

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 300px; 
    overflow-y: auto; /* Enable vertical scroll */
    min-height: 50px; /* Set a minimum height */
  }

  li {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid black;
    border-right: 1px solid #0000003b;
    padding: 10px 4px;
    margin-bottom: 6px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
      transform: scale(1.01);
    }

    &.added-to-list {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media (max-width: 420px) {
    h2,
    p {
      font-size: 95%;
    }
  }
`;

const ChosenStepText = styled.span`
  margin-bottom: 8px;
  font-size: 13px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%; /* Ensure the buttons take up the full width */
`;

const FaCheckCircleStyled = styled(FaCheckCircle)`
  color: green;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 6px; 
  border-radius: 4px;
  cursor: pointer;
  font-size: 33px; 
  margin-right: 8px; 
  margin-bottom: 8px; 
  transition: ease-in 0.3s;
  background-color: white;

  &:hover {
    transition: ease-in 0.3s;
  }
`;

const FaUndoStyled = styled(FaUndo)`
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px; 
  border-radius: 4px;
  cursor: pointer;
  font-size: 33px; 
  margin-right: 8px; 
  margin-bottom: 8px; 
  transition: ease-in 0.3s;
  background-color: white;

  &:hover {
    transition: ease-in 0.3s;
  }
`;
