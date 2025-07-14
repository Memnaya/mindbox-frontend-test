import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { Task, TaskStatus } from '../types/task.types';

export interface TasksState {
  tasks: Task[];
  filter: TaskStatus;
}

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: Task = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      console.log('Payload:', action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((t) => !t.completed);
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, clearCompleted } =
  tasksSlice.actions;

export default tasksSlice.reducer;