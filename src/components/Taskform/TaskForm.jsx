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
  padding-bottom: 20px;
  padding-right: 6px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px black;
  font-weight: 600;

  &:hover {
    background-color: #45a049;
    padding: 10px 18px;
    transition: ease-in 0.2s;
    color: white;
  }
`;

const StyledPlus = styled(FaPlus)`
  font-size: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;
