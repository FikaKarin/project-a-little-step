import React, { useEffect, useState } from 'react';
import { CompleteLottie } from '../CompleteLottie/CompleteLottie';
import styled from 'styled-components';
import { colors } from '../theme';

export const AchievementsList = ({ completedSteps }) => {
  const [shouldRenderCompletedLottie, setShouldRenderCompletedLottie] =
    useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    if (completedSteps.length > 0) {
      setShouldRenderCompletedLottie(true);
    }
  }, [completedSteps]);
  
  const handleStepClick = (step) => {
    setSelectedStep(selectedStep === step ? null : step);
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
    <LottieContainer>
      {shouldRenderCompletedLottie &&
        completedSteps.map((step) => (
          <StyledLottieWrapper key={step.id} onClick={() => handleStepClick(step)}>
            <StyledCompleteLottie width={60} height={60} />
            <StepInfo>
              <h4>{step.step.split(' ').slice(0, 3).join(' ')}{step.step.split(' ').length > 4 ? '...' : ''}</h4>
              {selectedStep === step && <p>Completed on: {formatDate(step.completedAt)}</p>}
            </StepInfo>
          </StyledLottieWrapper>
        ))}
    </LottieContainer>
  );
};

const LottieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const StyledCompleteLottie = styled(CompleteLottie)`
  width: 100%;
`;

const StyledLottieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  padding: 12px;
  border-radius: 10px;
`;

const StepInfo = styled.div`
  margin-top: 4px;
  max-width: 200px; /* Adjust the value based on your design requirements */
  
  h4 {
    font-size: 12px;
    color:black;
    margin: 4px 0;
    word-wrap: break-word;
    word-break: break-all; /* Add this line to break between any two characters */
  font-weight: 400;

  }

  p {
    font-size: 10px;
    color: ${colors.text};
    margin-top: 4px;
    font-style: italic;
  }
`;

