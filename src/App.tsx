import { Box } from '@chakra-ui/react/box'
import { Center } from '@chakra-ui/react/center'
import { VStack } from '@chakra-ui/react/stack'
import { Heading, Text } from '@chakra-ui/react'

export function App() {
  return (
    (<>
      <Box bg="todo.background"
        minH="100vh" display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <VStack>
            <Heading textStyle="7xl">todos</Heading>
            <Box p="4" bg="todo.card" color="todo.text">
              <Text mt="2">Отжуманья</Text>
              <Text mt="1" color="todo.doneText" textDecoration="line-through">
                Пресс качат
              </Text>
            </Box>
          </VStack>
        </Center>
      </Box>
    </>
    )
  )
}
