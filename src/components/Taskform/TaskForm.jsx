import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { addTask } from '../../reducers/tasks';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ id: Date.now(), task: newTask, completed: false }));
      setNewTask('');
    }
  };

  return (
    <TaskFormWrapper>
      <h2>Add Step</h2>
      <input
        type='text'
        id='newTaskInput'
        name='newTask'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Enter task'
      />
      <ButtonContainer>
        <Button onClick={handleAddTask}>
          <StyledPlus />
        </Button>
      </ButtonContainer>
    </TaskFormWrapper>
  );
};

const TaskFormWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

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
  padding: 6px 10px;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px black;
  font-weight: 600;

  &:hover {
    background-color: #45a049a6;
    padding: 8px 12px;
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
