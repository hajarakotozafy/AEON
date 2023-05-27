import {DefaultTheme} from "styled-components";
import "@fontsource/manrope"

const theme: DefaultTheme = {
    shape: {
        round: '50px',
        square: '8px'
    },
    size: (value: number, sizeMultiplicator = 8) => {
        return value * sizeMultiplicator
    },
    typography: {
        body: 'Manrope',
        heading: 'Manrope'
    }
}

export default theme
