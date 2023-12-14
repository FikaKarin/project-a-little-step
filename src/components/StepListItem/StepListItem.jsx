import React from 'react';
import styled from 'styled-components';
import { IoFootstepsOutline } from 'react-icons/io5';

export const StepListItem = ({ step, handleToggleChosen }) => {
  const handleStepClick = () => {
    // Handle the logic when a StepListItem is clicked
    handleToggleChosen(step.id);
  };

  return (
    <StepListItemWrapper key={step.id} onClick={handleStepClick}>
      <FootWrapper>
        <IoFootstepsOutlineStyled />
      </FootWrapper>
      <p>{step.step}</p>
      {step.readMoreLink && (
        <ReadMoreLink
          href={step.readMoreLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          Read more
        </ReadMoreLink>
      )}
    </StepListItemWrapper>
  );
};

const StepListItemWrapper = styled.li`
  margin-bottom: 10px;
  padding: 10px 3px;
  border-bottom: 1px solid #0000005a;
  transition: transform 0.2s ease-in-out, opacity 0.3s ease-in;

  &:hover {
    transform: scale(1.02);
  }

  &.added-to-list {
    opacity: 0;
    transform: translateY(20px);
  }
  &:last-child {
    margin-bottom: 0;
  }

  display: flex;
  align-items: center;

  p {
    margin-bottom: 5px;
    color: black;
    margin-left: 10px;
    flex: 1; /* Allow the paragraph to take up the remaining space */
    word-wrap: break-word; /* Ensure text wraps within the container */
  }

  @media (max-width: 420px) {
    padding: 8px;
  }
`;

const FootWrapper = styled.div`
  margin-right: 10px;
`;

const IoFootstepsOutlineStyled = styled(IoFootstepsOutline)`
  color: green;
  font-size: 24px;
`;

const ReadMoreLink = styled.a`
  margin-left: 10px;
  color: blue;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
