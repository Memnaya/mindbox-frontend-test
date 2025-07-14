// alias могут подсвечиваться красным, но все работает корректно
import { render, screen, fireEvent } from './test-utils';
import { vi } from 'vitest';
import TaskCard from '@/components/TaskCard';
import * as reactRedux from 'react-redux';
import { toggleTask } from '@/features/taskSlice';

const mockDispatch = vi.fn();

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof reactRedux>('react-redux');
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

describe('TaskCard', () => {
  const task = {
    id: 'task-1',
    text: 'Test task',
    completed: false,
  };

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('диспатчит toggleTask с id задачи при клике на индикатор', () => {
    render(<TaskCard task={task} />);
    const indicator = screen.getByTestId('checkbox-indicator');
    fireEvent.click(indicator);
    expect(mockDispatch).toHaveBeenCalledWith(toggleTask(task.id));
  });
});


