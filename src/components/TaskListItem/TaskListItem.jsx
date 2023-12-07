import React from 'react';
import styled from 'styled-components';
import { IoFootstepsOutline } from 'react-icons/io5';

export const TaskListItem = ({ task, handleToggleChosen }) => {
  const handleTaskClick = () => {
    // Handle the logic when a TaskListItem is clicked
    handleToggleChosen(task.id);
  };

  return (
    <TaskListItemWrapper>
      <li key={task.id} onClick={handleTaskClick}>
        <div>
          <FootWrapper>
            <IoFootstepsOutlineStyled />
          </FootWrapper>
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
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid #0000005a;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;

    &:hover {
      transform: scale(1.05);
      background-color: #00800012;
    }

    &.added-to-list {
      opacity: 0;
      transform: translateY(20px);
    }
    &:last-child {
      margin-bottom: 0;
    }

    div {
      display: flex;
      align-items: center;
    }

    p {
      margin-bottom: 5px;
      color: black;
      margin-left: 10px;
      flex: 1; /* Allow the paragraph to take up the remaining space */
      word-wrap: break-word; /* Ensure text wraps within the container */
    }
  }

  @media (max-width: 420px) {
    li {
      padding: 8px; /* Adjust padding for smaller screens */
    }
  }
`;
const FootWrapper = styled.div``;

const IoFootstepsOutlineStyled = styled(IoFootstepsOutline)`
  color: green;
  font-size: 24px;
`;
