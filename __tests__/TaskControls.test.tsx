// alias могут подсвечиваться красным, но все работает корректно
import { render, screen, fireEvent } from './test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TaskControls } from '@/components/TaskControls';
import * as reduxHooks from '@hooks/useReduxHooks';
import { setFilter, clearCompleted } from '@/features/taskSlice';

vi.mock('@hooks/useReduxHooks', () => ({
    useAppSelector: vi.fn(),
    useAppDispatch: vi.fn(),
}));

describe('TaskControls', () => {
    const mockDispatch = vi.fn();
    const mockUseAppSelector = vi.mocked(reduxHooks.useAppSelector);
    const mockUseAppDispatch = vi.mocked(reduxHooks.useAppDispatch);

    beforeEach(() => {
        vi.clearAllMocks();
        mockUseAppDispatch.mockReturnValue(mockDispatch);
    });

    it('отображает количество задач для фильтра all', () => {
        mockUseAppSelector
            .mockReturnValueOnce('all')
            .mockReturnValueOnce(new Array(5));

        render(<TaskControls />);
        expect(screen.getByText('5 items left')).toBeInTheDocument();
    });

    it('отображает количество задач для фильтра active', () => {
        mockUseAppSelector
            .mockReturnValueOnce('active')
            .mockReturnValueOnce(new Array(3));

        render(<TaskControls />);
        expect(screen.getByText('3 items left')).toBeInTheDocument();
    });

    it('отображает количество задач для фильтра completed', () => {
        mockUseAppSelector
            .mockReturnValueOnce('completed')
            .mockReturnValueOnce(new Array(2));

        render(<TaskControls />);
        expect(screen.getByText('2 items left')).toBeInTheDocument();
    });

    it('вызывает setFilter с "all" при клике на кнопку All', () => {
        mockUseAppSelector
            .mockReturnValueOnce('active')
            .mockReturnValueOnce(new Array(3));

        render(<TaskControls />);
        fireEvent.click(screen.getByRole('button', { name: /^all$/i }));
        expect(mockDispatch).toHaveBeenCalledWith(setFilter('all'));
    });

    it('вызывает setFilter с "active" при клике на кнопку Active', () => {
        mockUseAppSelector
            .mockReturnValueOnce('all')
            .mockReturnValueOnce(new Array(5));

        render(<TaskControls />);
        fireEvent.click(screen.getByRole('button', { name: /^active$/i }));
        expect(mockDispatch).toHaveBeenCalledWith(setFilter('active'));
    });

    it('вызывает setFilter с "completed" при клике на кнопку Completed', () => {
        mockUseAppSelector
            .mockReturnValueOnce('all')
            .mockReturnValueOnce(new Array(5));

        render(<TaskControls />);
        fireEvent.click(screen.getByRole('button', { name: /^completed$/i }));

        expect(mockDispatch).toHaveBeenCalledWith(setFilter('completed'));
    });

    it('вызывает clearCompleted при клике на кнопку Clear completed', () => {
        mockUseAppSelector
            .mockReturnValueOnce('all')
            .mockReturnValueOnce(new Array(5));

        render(<TaskControls />);
        fireEvent.click(screen.getByRole('button', { name: /^clear completed$/i }));

        expect(mockDispatch).toHaveBeenCalledWith(clearCompleted());
    });
});
