import { Box } from '@chakra-ui/react/box';
import { Separator } from '@chakra-ui/react/separator';
import { Center, Text } from '@chakra-ui/react';

import { useAppSelector } from '@hooks/useReduxHooks';
import { selectFilter, selectFilteredTasks } from '@/features/taskSelectors';
import TaskCard from './TaskCard';
import { AddTaskInput } from './AddTaskInput';

export const TaskList = () => {
    const filter = useAppSelector(selectFilter);
    const tasks = useAppSelector(selectFilteredTasks);

    return (
        <Box bg="todo.card" key={filter}>
            <AddTaskInput />
            <Separator size="xs" color="#e9e9e9" />
            <>
                {tasks.length === 0 ?
                    <Center pt="3" pb="3" borderBottom="1px solid" borderColor="#e9e9e9">
                        <Text color="todo.text" fontWeight="light" fontSize="xl">There is no task here yet</Text>
                    </Center>
                    :
                    <div key={filter}>
                        {tasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                }
            </>
        </Box>
    );
};