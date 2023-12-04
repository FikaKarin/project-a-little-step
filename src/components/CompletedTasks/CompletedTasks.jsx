import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { undoCompleteTask } from '../../reducers/tasks';
import { FaUndo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AchievementsList } from '../AchievementsList/AchievementsList';
import { colors } from '../theme';

export const CompletedTasks = () => {
  const completedTasks = useSelector(
    (state) => state.tasks.completedTasks || []
  );
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUndoCompleteTask = (taskId) => {
    dispatch(undoCompleteTask({ taskId }));
  };

  const handleGoToTaskContainer = () => {
    navigate('/task-container');
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
    <CompletedTaskListWrapper>
      <h2>Completed ({completedTasks.length})</h2>
      <AchievementsList completedTasks={completedTasks} />
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <CompletedTaskText>{task.task}</CompletedTaskText>
            <p>Completed on: {formatDate(task.completedAt)}</p>
            <UndoIcon onClick={() => handleUndoCompleteTask(task.id)} />
          </li>
        ))}
      </ul>
  
      <BottomLeftButton onClick={handleGoToTaskContainer}>
        Go to Task Container
      </BottomLeftButton>
    </CompletedTaskListWrapper>
  );
};


const CompletedTaskListWrapper = styled.div`
display: flex;
flex-direction: column;
padding-left: 16px;
border-radius: 6px;
padding-bottom: 8px;
max-width: 600px;
margin: 0 auto;
background-color: white;
opacity: 0.9;

h2 {
  font-size: 1.2rem;
  margin-bottom: 18px;
  color: ${colors.primary};
}

p {
  font-size: 12px;
  color: ${colors.text};
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &.added-to-list {
    opacity: 0;
    transform: translateY(20px);
  }
}

@media (max-width: 420px) {
  h2,
  p {
    font-size: 85%;
  }
}
`;

const CompletedTaskText = styled.span`
margin-bottom: 8px;
text-decoration: line-through;
color: #888;
`;

const BottomLeftButton = styled.button`
bottom: 8px;
left: 8px;
background-color: ${colors.primary};
color: ${colors.text};
padding: 8px;
border: none;
border-radius: 4px;
cursor: pointer;
width: 150px;
`;

const UndoIcon = styled(FaUndo)`
  color: ${colors.accent};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 33px;
  align-self: flex-end;
  font-weight: 600;
  margin-left: 8px;

  &:hover {
    color: ${colors.secondary};
  }
`;