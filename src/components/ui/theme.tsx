import {
    defineConfig,
    createSystem,
    defaultConfig,
} from '@chakra-ui/react'

import { headingRecipe } from './recipes/heading.resipe'
import { inputRecipe } from './recipes/input.resipe'
import { checkboxCardSlotRecipe } from './recipes/checkbox-card.resipe'

const config = defineConfig({
    cssVarsRoot: ':where(:root, :host)',
    theme: {
        tokens: {
            colors: {
                todo: {
                    background: { value: '#f5f5f5' },
                    card: { value: '#fefefe' },
                    header: { value: '#e9dad9' },
                    text: { value: '#555555' },
                    placeholder: { value: '#e6e6e6' },
                    doneTask: { value: '#dddddd' },
                },
            },
            fonts: {
                heading: { value: `'Certia', sans-serif` },
                placeholder: { value: `'Celesta', sans-serif` },
                body: { value: `'Matangi', sans-serif` },
            },
        },
        slotRecipes: {
            checkboxCard: checkboxCardSlotRecipe,
        },
    },
})

const system = createSystem(defaultConfig,
    {
        ...config,
        theme: {
            ...config.theme,
            recipes: {
                heading: headingRecipe,
                input: inputRecipe,
            },

        }
    })

export { system }