import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { addStep } from '../../reducers/steps';
import styled from 'styled-components';

export const StepForm = () => {
  const dispatch = useDispatch();
  const [newStep, setNewStep] = useState('');

  const handleAddStep = () => {
    if (newStep.trim() !== '') {
      dispatch(addStep({ id: Date.now(), step: newStep, completed: false }));
      setNewStep('');
    }
  };

  return (
    <StepFormWrapper>
      <h2>Add Step</h2>
      <input
        type='text'
        id='newStepInput'
        name='newStep'
        value={newStep}
        onChange={(e) => setNewStep(e.target.value)}
        placeholder='Enter step'
      />
      <ButtonContainer>
        <Button onClick={handleAddStep}>
          <StyledPlus /> Add
        </Button>
      </ButtonContainer>
    </StepFormWrapper>
  );
};

const StepFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #00800012; */
  padding: 10px 8px;
  width: 100%;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  align-items: center; /* Align items vertically */
  padding: 2px 6px;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  background-color: white;

  &:hover {
    background-color: #45a049a6;
    padding: 6px 10px;
    transition: ease-in 0.2s;
    color: white;
  }
`;


const StyledPlus = styled(FaPlus)`
  font-size: 20px;
  transition: transform 0.3s ease-in;

  &:hover {
    transform: rotate(360deg);
  }
`;
