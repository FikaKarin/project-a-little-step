import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  toggleTaskChosen,
  removeTask,
  undoRemoveTask,
  startNewDay,
} from '../../reducers/tasks';

import { TaskListHeader } from '../TaskListHeader/TaskListHeader';
import { TaskListItem } from '../TaskListItem/TaskListItem';
import { FaUndo } from 'react-icons/fa';

export const TaskList = () => {
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const chosenToday = useSelector((state) => state.tasks.chosenTasks);
  // const removedTasks = useSelector((state) => state.tasks.removedTasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({ text: '', dueDate: null });
  const [showChosen, setShowChosen] = useState(false);
  const [showUnchosen, setShowUnchosen] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [createdAfterDate, setCreatedAfterDate] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem('chosenTasks');
    if (savedState) {
      dispatch({
        type: 'LOAD_CHOSEN_TASKS',
        payload: JSON.parse(savedState),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('chosenTasks', JSON.stringify(allTasks));
  }, [allTasks]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getDay() !== parseInt(localStorage.getItem('currentDay'), 10)) {
        dispatch(startNewDay());
        localStorage.setItem('currentDay', now.getDay().toString());
      }
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, [dispatch]);



  const handleToggleChosen = (taskId) => {
    dispatch(toggleTaskChosen(taskId));
  };  

  const handleUndoRemoveTask = () => {
    dispatch(undoRemoveTask());
  };

  return (
    <TaskListWrapper>
      <TaskListHeader
        title='Steps'
        count={allTasks.length}
        chosenToday={chosenToday}
      />
      <ul>
        {allTasks
          .slice()
          .reverse()
          .filter(
            (task) =>
              (showAll ||
                (!showChosen && !task.chosen) ||
                (showChosen && task.chosen)) &&
              (showAll ||
                (!showUnchosen && task.chosen) ||
                (showUnchosen && !task.chosen))
          )
          .filter(
            (task) =>
              !createdAfterDate || new Date(task.createdAt) > createdAfterDate
          )
          .map((task) => {
            return (
              <TaskListItem
                key={`${task.id}-${task.task}`}
                task={task}
                handleToggleChosen={handleToggleChosen}
                handleUndoRemoveTask={handleUndoRemoveTask}
              />
            );
          })}
      </ul>
    </TaskListWrapper>
  );
};

const TaskListWrapper = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-height: 400px; /* Set maximum height */
  overflow-y: auto; /* Add vertical scrollbar if needed */

  ul {
    list-style: none;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    input {
      margin-right: 8px;
    }

    label {
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      color: black;
    }
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 420px) {
    h2,
    p {
      font-size: 95%;
    }
  }
`;

