import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaUndo } from 'react-icons/fa';
import { AchievementsList } from '../AchievementsList/AchievementsList';
import { colors } from '../theme';
import { undoCompleteTask } from '../../reducers/tasks';
import { useNavigate } from 'react-router-dom';

export const CompletedTasks = () => {
  const completedTasks = useSelector(
    (state) => state.tasks.completedTasks || []
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h2>Achievements ({completedTasks.length})</h2>
      <AchievementsList completedTasks={completedTasks} />
      <h2>Completed</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>
            <TaskContent>
              <CompletedTaskText>{task.task}</CompletedTaskText>
              <UndoIcon onClick={() => handleUndoCompleteTask(task.id)} />
            </TaskContent>
            <p>Completed on: {formatDate(task.completedAt)}</p>
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
  padding: 32px;
  padding-bottom: 18px;
  margin: 0 auto;
  background-color: white;
  opacity: 0.9;
  overflow: hidden;
  max-width: 700px;
  width: 90%;

  h2 {
    font-size: 1.2rem;
    margin-top: 38px;
    color: ${colors.primary};
  }

  p {
    font-size: 12px;
    color: ${colors.text};
  }

  ul {
    list-style: none;
    padding: 12px;
    margin: 0;
    margin-bottom: 10px;
    max-height: 350px;
    overflow-y: auto;
    padding-top: 12px;
    box-shadow: 0px 1px 4px black;
    border-radius: 4px;
  }

  li {
    margin-bottom: 16px;
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

  @media (max-width: 420px) {
    h2,
    p {
      font-size: 85%;
    }
  }
`;

const TaskContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const CompletedTaskText = styled.span`
  margin-bottom: 8px;
  text-decoration: line-through;
  color: #888;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${(props) => props.expanded && 'white-space: normal;'}
`;

const BottomLeftButton = styled.button`
  bottom: 8px;
  left: 8px;
  background-color: ${colors.primary};
  color: ${colors.background};
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 150px;
  font-weight: 600;
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
