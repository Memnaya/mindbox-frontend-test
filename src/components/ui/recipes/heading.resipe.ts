import { defineRecipe } from "@chakra-ui/react"

export const headingRecipe = defineRecipe({
    className: 'todo-heading',
    base: {
        fontFamily: 'heading',
        fontWeight: "100",
        textAlign: "center",
        color: "todo.header",
    },
})