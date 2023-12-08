import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { completeTask, undoChosenTask } from '../../reducers/tasks';
import { FaCheckCircle, FaUndo } from 'react-icons/fa';
import { CompletedTaskPopup } from '../CompletedTaskPopUp/CompletedTaskPopUp';

export const ChosenTaskList = () => {
  const dispatch = useDispatch();
  const chosenTasks = useSelector((state) => state.tasks.chosenTasks || []);
  const [completedTaskPopup, setCompletedTaskPopup] = React.useState(null);

  const handleCompleteTask = (taskId, taskName) => {
    dispatch(completeTask({ taskId }));
    setCompletedTaskPopup({
      key: taskId,
      task: taskName,
      onComplete: () => setCompletedTaskPopup(null),
    });
  };
  

  const handleUndoChosenTask = (taskId) => {
    dispatch(undoChosenTask({ taskId }));
  };

  return (
    <ChosenTaskListWrapper>
      <h2>Chosen ({chosenTasks.length})</h2>
      {completedTaskPopup && <CompletedTaskPopup {...completedTaskPopup} />}
      {chosenTasks.length > 0 ? (
        <ul>
          {chosenTasks.map((task) => (
            <li key={task.id}>
              <ChosenTaskText>{task.task}</ChosenTaskText>
              <ButtonWrapper>
                <FaCheckCircleStyled
                  onClick={() => handleCompleteTask(task.id, task.task)}
                />
                <FaUndoStyled onClick={() => handleUndoChosenTask(task.id)} />
              </ButtonWrapper>
            </li>
          ))}
        </ul>
      ) : (
        <p>No chosen tasks yet.</p>
      )}
    </ChosenTaskListWrapper>
  );
};

const ChosenTaskListWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 0 6px;
  background-color: #ffff0015;

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
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

const ChosenTaskText = styled.span`
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
  padding: 6px; // Adjusted padding
  border-radius: 4px;
  cursor: pointer;
  font-size: 33px; // Increased font size
  margin-right: 8px; // Add some space between the icons
  margin-bottom: 8px; // Add space between the icons and the bottom
  transition: ease-in 0.3s;
  background-color: white;

  &:hover {
    transition: ease-in 0.3s;
  }
`;

const FaUndoStyled = styled(FaUndo)`
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px; // Adjusted padding
  border-radius: 4px;
  cursor: pointer;
  font-size: 33px; // Increased font size
  margin-right: 8px; // Add some space between the icons
  margin-bottom: 8px; // Add space between the icons and the bottom
  transition: ease-in 0.3s;
  background-color: white;

  &:hover {
    transition: ease-in 0.3s;
  }
`;
