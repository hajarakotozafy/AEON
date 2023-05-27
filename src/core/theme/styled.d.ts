// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        shape: {
            round: string,
            square: string
        }
        size: (value: number) => number
        typography: {
            heading: string
            body: string
        }
    }
}
