import { Box } from '@chakra-ui/react/box'
import { Center } from '@chakra-ui/react/center'
import { VStack } from '@chakra-ui/react/stack'
import { Heading } from '@chakra-ui/react'
import { TaskList } from './components/TaskList'
import { TaskControls } from './components/TaskControls'

// не совсем поняла что это за наложения на макете, может их можно было бы сделать через блоки с z-index, но решила оставить просто один блок
export function App() {
  return (
    <>
      <Box bg="todo.background"
        minH="100vh" display="flex"
        alignItems="center"
        justifyContent="center"
        px="4"
        py="10"
      >
        <Center>
          <VStack>
            <Heading textStyle="7xl">todos</Heading>
            <Box
              pb="4"
              minW="xl"
              shadow="lg"
              borderRadius="sm"
              bg="todo.card"
              color="todo.text"
              maxW="2/3"
            >
              <TaskList />
              <TaskControls />
            </Box>
          </VStack>
        </Center>
      </Box>
    </>
  )
}
