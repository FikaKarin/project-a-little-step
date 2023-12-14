import React from 'react';
import styled from 'styled-components';

export const StepListHeader = ({ title, count }) => (
  <StepListHeaderWrapper>
    <h2>{title} ({count}) </h2>
  </StepListHeaderWrapper>
);

const StepListHeaderWrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 400;
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

