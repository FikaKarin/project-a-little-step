import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const TaskListItem = ({
  task,
  handleToggleChosen,
  handleRemoveTask,
}) => {

  return (
    <TaskListItemWrapper>
      <li key={task.id}>
        <div>
          <input
            type='checkbox'
            checked={task.chosen || false}
            onChange={() => handleToggleChosen(task.id)}
          />
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
          {task.dueDate && (
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
          )}
        </div>
        <div className='action-buttons'>
          <FaTrash
            style={{
              color: 'red',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '8px', // Adjusted padding
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '33px', // Increased font size
              fontWeight: '600',
              marginLeft: 'auto', // Move to the right
              marginRight: '8px', // Add some space between buttons
              marginBottom: '8px', // Add space between buttons and the bottom
              transition: 'ease-in 0.3s',
            }}
            onClick={() => handleRemoveTask(task.id)}
          />
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

    .created-date {
      font-size: 0.8rem;
      color: #686767;
    }

    a {
      text-decoration: none;
      color: #007bff;
      margin-right: 10px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 420px) {
    li {
      padding: 0;
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    width: 30%;

    button {
      margin-top: auto;
      align-self: flex-end;
      padding: 4px 8px;
      background: linear-gradient(
        to right,
        #ca071b,
        #6c0616
      ); /* Gradient colors */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 10px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */

      &:hover {
        padding: 10px 18px;
        transition: ease-in 0.3s;
      }
    }
  }
`;
