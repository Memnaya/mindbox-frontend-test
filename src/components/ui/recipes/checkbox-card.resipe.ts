import { defineSlotRecipe } from '@chakra-ui/react'

export const checkboxCardSlotRecipe = defineSlotRecipe({
  slots: ['root', 'content', 'label', 'indicator',],
  base: {
    root: {
      _focusVisible: {
        outline: 'none',
        '--focus-ring-color': 'transparent',
        boxShadow: 'none',
      },
    },
    content: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "4",
      px: "2",
      py: "3",
    },
    label: {
      wordBreak: "break-word",
      fontWeight: "light",
      fontSize: "xl",
      fontFamily: 'body',
      _focusVisible: {
        outline: 'none',
        '--focus-ring-color': 'transparent',
        boxShadow: 'none',
      },
    },
    indicator: {
      borderRadius: 'full',
      colorPalette: 'green',
      bg: 'transparent',
      _hover: {
        boxShadow: '0 0 6px #e9dad9',
        cursor: 'pointer',
      },
    }
  },
  variants: {
    variant: {
      outline: {
        root: {
          border: "none",
          _checked: {
            boxShadow: "none !important",
            borderColor: "transparent !important",
            "--shadow-color": "transparent !important",
            border: "none !important"
          },
        },
        indicator: {
          "&:is([data-state=checked], [data-state=indeterminate])": {
            bg: "transparent",
            color: "green",
            borderColor: "todo.doneText",
          }
        }
      }
    }
  }
})