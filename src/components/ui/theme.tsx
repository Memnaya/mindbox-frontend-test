import {
    defineConfig,
    createSystem,
    defineRecipe,
    defaultConfig,
} from '@chakra-ui/react'

const config = defineConfig({
    cssVarsRoot: ':where(:root, :host)',
    theme: {
        tokens: {
            colors: {
                todo: {
                    background: { value: '#f5f5f5' },
                    card: { value: '#fefefe' },
                    text: { value: '#555555' },
                    doneText: { value: '#dddddd' },
                },
            },
            fonts: {
                body: { value: `'Helvetica Neue', Helvetica, Arial, sans-serif` },
            },
        },
    },
})

const headingRecipe = defineRecipe({
    className: 'todo-heading',
    base: {
        fontWeight: "extralight",
        textAlign: "center",
        color: '#e9dad9',
    },
})


const system = createSystem(defaultConfig,
    {
        ...config,
        theme: {
            ...config.theme,
            recipes: {
                heading: headingRecipe,
            },

        }
    })

export {system}