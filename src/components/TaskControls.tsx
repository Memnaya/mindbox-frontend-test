import { Flex, Button, Text } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '@hooks/useReduxHooks';
import { setFilter, clearCompleted } from '@/features/taskSlice';
import { selectFilteredTasks } from '@/features/taskSelectors';

export const TaskControls = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.tasks.filter);

  const filteredTasks = useAppSelector(selectFilteredTasks);

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <Flex direction={{ base: 'column', md: 'row' }} pl="2" pr="2" justify="space-between" align="center" mt="4">
      <Text fontWeight="bold" fontSize="xs" ml="2" mb={{ base: 2, md: 0 }}>
        {filteredTasks.length} items left
      </Text>

      <Flex gap="2" mb={{ base: 2, md: 0 }}>
        <Button
          size="xs"
          variant={filter === 'all' ? 'outline' : 'ghost'}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </Button>
        <Button
          size="xs"
          variant={filter === 'active' ? 'outline' : 'ghost'}
          onClick={() => dispatch(setFilter('active'))}
        >
          Active
        </Button>
        <Button
          size="xs"
          variant={filter === 'completed' ? 'outline' : 'ghost'}
          onClick={() => dispatch(setFilter('completed'))}
        >
          Completed
        </Button>
      </Flex>

      <Button colorScheme="gray" variant="ghost" size="xs" onClick={handleClearCompleted}>
        Clear completed
      </Button>
    </Flex>
  );
};