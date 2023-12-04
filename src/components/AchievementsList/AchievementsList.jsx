import React, { useEffect, useState } from 'react';
import { CompleteLottie } from '../CompleteLottie/CompleteLottie'; // Import your CompleteLottie component
import styled from 'styled-components';

export const AchievementsList = ({ completedTasks }) => {
  const [shouldRenderCompletedLottie, setShouldRenderCompletedLottie] =
    useState(false);

  useEffect(() => {
    if (completedTasks.length > 0) {
      setShouldRenderCompletedLottie(true);
    }
  }, [completedTasks]);

  return (
    <LottieContainer>
      {shouldRenderCompletedLottie &&
        completedTasks.map((task) => (
          <StyledLottieWrapper key={task.id}>
            <StyledCompleteLottie height={80} />
            <h4>Great job!</h4>
          </StyledLottieWrapper>
        ))}
    </LottieContainer>
  );
};

const LottieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(100px, 1fr)
  ); // Adjust minmax and width as needed
  gap: 10px; // Adjust the gap between items
`;

const StyledCompleteLottie = styled(CompleteLottie)`
  width: 100%; // Adjust the width as needed
`;

const StyledLottieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;