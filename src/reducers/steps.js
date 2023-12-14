// Import createSlice function from Redux Toolkit and tasksData from tasks.json
import { createSlice } from '@reduxjs/toolkit';
import stepsData from '../steps.json';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

// Create a slice for steps with initial state and reducers
export const stepsSlice = createSlice({
  name: 'steps',
  initialState: {
    allSteps: stepsData.map((step) => ({
      ...step,
      createdAt: new Date().toISOString(), // Convert to string
      dueDate: null,
    })),
    chosenSteps: [], // Updated from chosenSteps
    removedSteps: [],
    dailyStepLimit: 3,
    chosenToday: [], // Make sure this is present
    completedSteps: [], // Add this line to initialize completedSteps as an empty array
  },
  reducers: {
    // Add a new task to the allSteps array
    addStep: (state, action) => {
      const { step, dueDate } = action.payload;
      const newStep = {
        id: uuidv4(), // Use uuid for generating a unique ID
        step,
        chosen: false,
        createdAt: new Date().toISOString(),
        dueDate,
      };
      state.allSteps.push(newStep);
    },
    
    undoChosenStep: (state, action) => {
      const { stepId } = action.payload;
      const undoneStep = state.chosenSteps.find((step) => step.id === stepId);

      if (undoneStep) {
        // Remove the step from chosenSteps
        state.chosenSteps = state.chosenSteps.filter(
          (step) => step.id !== stepId
        );

        // Reset the chosen property
        undoneStep.chosen = false;

        // Add the undone step back to allSteps
        state.allSteps.push(undoneStep);
      }
    },
    // Remove a step by its ID, move it to removedSteps array
    removeStep: (state, action) => {
      const removedStep = state.allSteps.find(
        (step) => step.id === action.payload
      );
      state.allSteps = state.allSteps.filter(
        (step) => step.id !== action.payload
      );
      state.chosenSteps = state.chosenSteps.filter(
        (step) => step.id !== action.payload
      );
      state.removedSteps.push(removedStep);
    },
    // Undo the removal of the last removed step
    undoRemoveStep: (state) => {
      const lastRemovedStep = state.removedSteps.pop();
      if (lastRemovedStep) {
        state.allSteps.push(lastRemovedStep);

        // Check if the undone step was chosen and remove it from chosenSteps
        if (lastRemovedStep.chosen) {
          state.chosenSteps = state.chosenSteps.filter(
            (step) => step.id !== lastRemovedStep.id
          );

          // Also update the chosenToday array if needed
          const index = state.chosenToday.indexOf(lastRemovedStep.id);
          if (index !== -1) {
            state.chosenToday.splice(index, 1);
          }
        }
      }
    },
    undoRemoveStep: (state) => {
      const lastRemovedStep = state.removedSteps.pop();
      if (lastRemovedStep) {
        state.allSteps.push(lastRemovedStep);

        // Check if the undone step was chosen and remove it from chosenSteps
        if (lastRemovedStep.chosen) {
          state.chosenSteps = state.chosenSteps.filter(
            (step) => step.id !== lastRemovedStep.id
          );

          // Also update the chosenToday array if needed
          const index = state.chosenToday.indexOf(lastRemovedStep.id);
          if (index !== -1) {
            state.chosenToday.splice(index, 1);
          }
        }
      }
    },
    completeStep: (state, action) => {
      const { stepId } = action.payload;
      const stepToComplete = state.chosenSteps.find(
        (step) => step.id === stepId
      );

      if (stepToComplete) {
        // Remove the step from chosenSteps
        state.chosenSteps = state.chosenSteps.filter(
          (step) => step.id !== stepId
        );

        // Check if the step was already completed
        const alreadyCompleted =
          state.completedSteps.findIndex((step) => step.id === stepId) !== -1;

        if (!alreadyCompleted) {
          // Add the completed step to completedSteps
          state.completedSteps.push({
            ...stepToComplete,
            completedAt: new Date().toISOString(),
          });
        } else {
          // If the step was already completed, move it back to chosenSteps
          state.chosenSteps.push(stepToComplete);
        }

        // Trigger the rendering of CompletedLottie in AchievementsList
        state.renderCompletedLottie = true;
      }
    },
    undoCompleteStep: (state, action) => {
      const { stepId } = action.payload;
      const undoneStep = state.completedSteps.find(
        (step) => step.id === stepId
      );

      if (undoneStep) {
        // Remove the step from completedSteps
        state.completedSteps = state.completedSteps.filter(
          (step) => step.id !== stepId
        );

        // Reset the completedAt timestamp
        undoneStep.completedAt = null;

        // Add the undone step back to chosenSteps
        state.chosenSteps.push(undoneStep);
      }
    },

    // Toggle the chosen status of a step
    toggleStepChosen: (state, action) => {
      const stepId = action.payload;
      const stepIndex = state.allSteps.findIndex((step) => step.id === stepId);
    
      if (stepIndex !== -1) {
        const updatedAllSteps = [...state.allSteps];
        const chosenStep = updatedAllSteps.splice(stepIndex, 1)[0];
        chosenStep.chosen = true;
    
        state.allSteps = updatedAllSteps;
        state.chosenSteps.push(chosenStep);
      }
    },    

    // Start a new day by resetting chosenToday array and unchecking all chosen tasks
    startNewDay: (state) => {
      console.log('Starting a new day!'); // Log when starting a new day
      state.chosenToday = [];
      state.allSteps.forEach((step) => {
        const stepCreationDay = new Date(step.createdAt).getDay();
        const currentDay = new Date().getDay();
        if (stepCreationDay === currentDay) {
          step.chosen = false;
        }
      });
    },
  },
});

// Export actions
export const {
  addStep,
  removeStep,
  undoRemoveStep,
  toggleStepChosen,
  startNewDay,
  completeStep,
  undoCompleteStep,
  undoChosenStep,
} = stepsSlice.actions;

// Export reducer
export default stepsSlice.reducer;
