import React, { useEffect, useState } from 'react';
import { CompleteLottie } from '../CompleteLottie/CompleteLottie';
import styled from 'styled-components';
import { colors } from '../theme';

export const AchievementsList = ({ completedTasks }) => {
  const [shouldRenderCompletedLottie, setShouldRenderCompletedLottie] =
    useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (completedTasks.length > 0) {
      setShouldRenderCompletedLottie(true);
    }
  }, [completedTasks]);

  const handleTaskClick = (task) => {
    setSelectedTask(selectedTask === task ? null : task);
  };

  return (
    <LottieContainer>
      {shouldRenderCompletedLottie &&
        completedTasks.map((task) => (
          <StyledLottieWrapper key={task.id} onClick={() => handleTaskClick(task)}>
            <StyledCompleteLottie width={60} height={60} />
            <TaskInfo>
              <h4>{task.task.split(' ').slice(0, 3).join(' ')}{task.task.split(' ').length > 3 ? '...' : ''}</h4>
              {selectedTask === task && <p>Completed on: {formatDate(task.completedAt)}</p>}
            </TaskInfo>
          </StyledLottieWrapper>
        ))}
    </LottieContainer>
  );
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
`;

const TaskInfo = styled.div`
  margin-top: 4px;
  max-width: 200px; /* Adjust the value based on your design requirements */
  
  h4 {
    font-size: 12px;
    color: green;
    margin: 4px 0;
    word-wrap: break-word;
    word-break: break-all; /* Add this line to break between any two characters */
  }

  p {
    font-size: 10px;
    color: ${colors.text};
    margin-top: 4px;
  }
`;

