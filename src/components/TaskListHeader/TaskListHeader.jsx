import React from 'react';
import styled from 'styled-components';

export const TaskListHeader = ({ title, count }) => (
  <TaskListHeaderWrapper>
    <h2>{title} ({count}) </h2>
  </TaskListHeaderWrapper>
);

const TaskListHeaderWrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .time {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .error-message {
    color: red;
  }
  @media (max-width: 420px) {
    h2, p {
      font-size: 95%;
    }
  }
`;

