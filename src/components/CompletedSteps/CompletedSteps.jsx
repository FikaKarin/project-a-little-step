import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaUndo } from 'react-icons/fa';
import { AchievementsList } from '../AchievementsList/AchievementsList';
import { colors } from '../theme';
import { undoCompleteStep } from '../../reducers/steps';
import { AchieveLottie } from '../AchieveLottie/AchieveLottie';
import { useNavigate } from 'react-router-dom';

export const CompletedSteps = () => {
  const completedSteps = useSelector(
    (state) => state.steps.completedSteps || []
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUndoCompleteStep = (stepId) => {
    dispatch(undoCompleteStep({ stepId }));
  };

  const handleGoToStepContainer = () => {
    navigate('/step-container');
  };

  const formatDate = (dateTimeString) => {
    const options = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  return (
    <CompletedStepListContainer>
      <CompletedStepListWrapper>
        <h2>Achievements ({completedSteps.length})</h2>
        <AchievementsList completedSteps={completedSteps} />
        <h2>Completed</h2>
        <ListContainer>
          <ul>
            {completedSteps.map((step) => (
              <li key={step.id}>
                <StepContent>
                  <CompletedStepText>{step.step}</CompletedStepText>
                  <UndoIconContainer>
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <UndoIcon
                        onClick={() => handleUndoCompleteStep(step.id)}
                      />
                    </React.Suspense>
                  </UndoIconContainer>
                </StepContent>
                <ResponsiveParagraph>
                  Completed on: {formatDate(step.completedAt)}
                </ResponsiveParagraph>
              </li>
            ))}
          </ul>
        </ListContainer>

        <BottomLeftButton onClick={handleGoToStepContainer}>
          Go Back
        </BottomLeftButton>
        <LottieContainer>
          <React.Suspense fallback={<div>Loading...</div>}>
            <AchieveLottie width={300} height={300} />
          </React.Suspense>
        </LottieContainer>
      </CompletedStepListWrapper>
    </CompletedStepListContainer>
  );
};

const CompletedStepListContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const CompletedStepListWrapper = styled.div`
  flex-grow: 1; /* Expand to fill the available space */
  display: flex;
  flex-direction: column;
  padding: 32px;
  padding-bottom: 18px;
  margin: 0 auto;
  background-color: white;
  opacity: 0.9;
  overflow: hidden;
  max-width: 700px;
  width: 100%;
  height: 100%;
  position: relative; /* Ensure relative positioning */
`;

const ListContainer = styled.div`
  box-shadow: 0px 1px 4px black;
  border-radius: 4px;

  ul {
    list-style: none;
    padding: 12px;
    margin: 0;
    margin-bottom: 10px;
    padding-top: 12px;
    max-height: 300px;
    overflow-y: auto;
  }

  li {
    margin-bottom: 16px;
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
      transform: scale(0.99);
    }

    &.added-to-list {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

const StepContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const CompletedStepText = styled.span`
  margin-bottom: 8px;
  text-decoration: line-through;
  color: #888;
  cursor: pointer;
  overflow: hidden;
  white-space: wrap;

  ${(props) => props.expanded && 'white-space: normal;'}
`;

const ResponsiveParagraph = styled.p`
  font-size: 12px;

  @media (max-width: 420px) {
    font-size: 10px;
  }
`;

const BottomLeftButton = styled.button`
  bottom: 8px;
  left: 8px;
  background-color: #017201;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 110px;
  font-weight: 600;
  margin-top: 16px;
  font-size: 16px;
`;

const UndoIconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const UndoIcon = styled(FaUndo)`
  color: ${colors.accent};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 28px;
  font-weight: 600;
  margin-left: 8px;

  &:hover {
    color: ${colors.secondary};
  }
`;

const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
