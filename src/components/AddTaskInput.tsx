import { InputGroup, Input } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react/icon';
import { RiArrowDownWideFill } from 'react-icons/ri';

import { useAppDispatch } from '@hooks/useReduxHooks';
import { addTask } from '@/features/taskSlice';
import { useState } from 'react'

export const AddTaskInput = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue))
      setInputValue('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <InputGroup
      pt="2"
      pb="2"
      startElement={
        <Icon
          as={RiArrowDownWideFill}
          color="#e6e6e6"
          style={{ strokeWidth: '3px', stroke: '#e6e6e6' }}
        />}
    >
      <Input
        fontSize="20px"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What need to be done?"
        maxLength={50}
      />
    </InputGroup >
  )
}