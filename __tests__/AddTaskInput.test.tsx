// alias могут подсвечиваться красным, но все работает корректно
import { render, screen, fireEvent } from './test-utils';
import { AddTaskInput } from '@/components/AddTaskInput';
import { addTask } from '@/features/taskSlice';
import { describe, expect, vi, beforeEach } from 'vitest';
import * as reduxHooks from '@/hooks/useReduxHooks';

vi.mock('@/hooks/useReduxHooks');

describe('AddTaskInput', () => {
  const dispatchMock = vi.fn();

  beforeEach(() => {
    dispatchMock.mockClear();
    vi.spyOn(reduxHooks, 'useAppDispatch').mockReturnValue(dispatchMock);
  });

  it('рендерит input с placeholder', () => {
    render(<AddTaskInput />);
    expect(screen.getByPlaceholderText(/what need to be done/i)).toBeInTheDocument();
  });

  it('обновляет значение input при вводе', () => {
    render(<AddTaskInput />);
    const input = screen.getByPlaceholderText(/what need to be done/i);
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    expect(input).toHaveValue('Новая задача');
  });

  it('вызывает dispatch addTask и очищает input по Enter', () => {
    render(<AddTaskInput />);
    const input = screen.getByPlaceholderText(/what need to be done/i);

    fireEvent.change(input, { target: { value: 'Тестовая задача' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(dispatchMock).toHaveBeenCalledWith(addTask('Тестовая задача'));
    expect(input).toHaveValue('');
  });

  it('не вызывает dispatch, если input пустой при Enter', () => {
    render(<AddTaskInput />);
    const input = screen.getByPlaceholderText(/what need to be done/i);

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(dispatchMock).not.toHaveBeenCalled();
  });
});
