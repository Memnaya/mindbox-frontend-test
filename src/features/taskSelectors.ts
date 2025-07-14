import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@store/store';

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.tasks.filter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter((t) => !t.completed);
      case 'completed':
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }
);