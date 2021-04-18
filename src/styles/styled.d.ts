import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface cdslabTheme {
    borderRadius: string

    colors: {
      main: string;
      secondary: string
    }
  }
}