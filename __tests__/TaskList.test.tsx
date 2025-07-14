// alias могут подсвечиваться красным, но все работает корректно
import { describe, expect, test, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from './test-utils';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import type { Task, TaskStatus } from '../src/types/task.types';
import type { TasksState } from '@features/taskSlice';
import taskReducer from '@features/taskSlice';
import { TaskList } from '@components/TaskList';
import * as useReduxHooks from '@hooks/useReduxHooks';

vi.mock('@hooks/useReduxHooks', () => ({
  useAppSelector: vi.fn(),
}));

vi.mock('@components/TaskCard', () => ({
  default: () => <div data-testid="task-card">Mocked TaskCard</div>,
}));

vi.mock('@components/AddTaskInput', () => ({
  AddTaskInput: () => <div data-testid="add-task-input">Mocked AddTaskInput</div>,
}));

describe('TaskList Component', () => {
  let store: ReturnType<typeof configureStore<{ tasks: TasksState }>>;

  beforeEach(() => {
    const preloadedState: { tasks: TasksState } = {
      tasks: {
        filter: 'all' as TaskStatus,
        tasks: [] as Task[],
      },
    };

    store = configureStore({
      reducer: { tasks: taskReducer },
      preloadedState,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

  const mockUseAppSelector = vi.mocked(useReduxHooks.useAppSelector);

  test('должен отображать AddTaskInput', () => {
    mockUseAppSelector.mockImplementation((selector) =>
      selector(store.getState())
    );

    renderComponent();

    expect(screen.getByTestId('add-task-input')).toBeInTheDocument();
  });

  test('должен отображать сообщение "There is no task here yet" если нет задач', () => {
    mockUseAppSelector.mockImplementation((selector) =>
      selector(store.getState())
    );

    renderComponent();

    expect(screen.getByText(/there is no task here yet/i)).toBeInTheDocument();
  });

  test('должен отображать список задач, если они есть', () => {
    const mockTasks: Task[] = [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ];

    mockUseAppSelector.mockImplementation((selector) =>
      selector({ tasks: { filter: 'all', tasks: mockTasks } })
    );

    renderComponent();

    expect(screen.getAllByTestId('task-card')).toHaveLength(mockTasks.length);
  });

  test('должен отображать разное количество задач при изменении фильтра', () => {
    const allTasks: Task[] = [
      { id: '1', text: 'Task 1', completed: false },
      { id: '2', text: 'Task 2', completed: true },
    ];
    const activeTasks = allTasks.filter(task => !task.completed);

    mockUseAppSelector.mockImplementation(selector =>
      selector({ tasks: { filter: 'all', tasks: allTasks } })
    );
    const { unmount } = renderComponent();
    expect(screen.getAllByTestId('task-card')).toHaveLength(allTasks.length);

    unmount();

    mockUseAppSelector.mockImplementation(selector =>
      selector({ tasks: { filter: 'active', tasks: activeTasks } })
    );
    renderComponent();
    expect(screen.getAllByTestId('task-card')).toHaveLength(activeTasks.length);
  });
});
