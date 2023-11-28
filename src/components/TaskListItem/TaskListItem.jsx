import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const TaskListItem = ({ task, handleToggleChosen }) => {
  const handleTaskClick = () => {
    // Handle the logic when a TaskListItem is clicked
    handleToggleChosen(task.id);
  };

  return (
    <TaskListItemWrapper>
      <li key={task.id} onClick={handleTaskClick}>
        <div>
          <p>{task.task}</p>
          {task.readMoreLink && (
            <a
              href={task.readMoreLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Read more
            </a>
          )}
        </div>
      </li>
    </TaskListItemWrapper>
  );
};

const TaskListItemWrapper = styled.div`
  li {
    display: flex;
    align-items: center; /* Align items in a row */
    justify-content: space-between; /* Add space between items */
    margin-bottom: 10px;
    margin-top: 8px;
    margin-right: 10px;
    padding: 8px;
    border-bottom: 1px solid black;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;

    &:hover {
      transform: scale(1.05);
    }

    &.added-to-list {
      opacity: 0;
      transform: translateY(20px);
    }
    &:last-child {
      margin-bottom: 0;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center; /* Align items in a row */
    }

    p {
      margin-bottom: 5px;
      color: black;
      margin-left: 10px; /* Add margin to the left of the paragraph */
    }
  }
  @media (max-width: 420px) {
    li {
      padding: 0;
    }
  }
`;
