import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define the base component styles
const baseStyle = {
  borderRadius: 'xl', // add a border radius
  fontWeight: 'medium', // change the font weight
}
const sizes = {
    lg: defineStyle({
      maxW: '75ch',
      p: '8',
      fontSize: 'xl',
    }),
  }

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle, sizes })