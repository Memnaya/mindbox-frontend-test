import { defineRecipe } from "@chakra-ui/react"

export const inputRecipe = defineRecipe({
    className: 'todo-input',
    base: {
        fontWeight: '100',
        color: 'todo.text',
        fontSize: '20px',
        border: 'none',
        _placeholder: {
            fontFamily: 'placeholder',
            fontSize: '20px',
            fontStyle: 'italic',
            color: 'todo.placeholder',
        },
        _focus: {
            border: 'none',
            boxShadow: 'none',
        },
        _hover: {
            border: 'none',
        },
        _focusVisible: {
            outline: 'none',
            '--focus-ring-color': 'transparent',
        },
    },
})