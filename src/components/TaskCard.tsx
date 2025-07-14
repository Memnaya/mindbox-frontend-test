import { CheckboxCard, Separator } from '@chakra-ui/react';
import type { Task } from '../types/task.types';
import { useDispatch } from 'react-redux';
import { toggleTask } from '@/features/taskSlice';

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
     console.log('Toggling task', task.id);
    dispatch(toggleTask(task.id));
  };

  return (
    <CheckboxCard.Root variant="outline" value={task.id} checked={task.completed}>
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Content>
           <CheckboxCard.Label
           color={task.completed ? 'todo.doneTask' : 'inherit'}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </CheckboxCard.Label>
          <CheckboxCard.Indicator data-testid="checkbox-indicator" onClick={handleToggle} />
        </CheckboxCard.Content>
      </CheckboxCard.Control>
      <Separator size="xs" color="#e9e9e9" />
    </CheckboxCard.Root>
  );
};

export default TaskCard;