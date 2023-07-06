import { extendTheme } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { containerTheme } from './components/Container'



const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
}

const theme = extendTheme({ components: 
    { breakpoints,
    Container: containerTheme } 

}) 
export default theme;