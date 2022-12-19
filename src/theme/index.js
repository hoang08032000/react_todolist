import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles/'
import { useMemo } from 'react'
import customShadows from './customShadows'
import GlobalStyles from './globalStyles'
import palette from './palette'
import shadows from './shadows'

const ThemeProvider = ({ children }) => {
    const themeOptions = useMemo(() => ({
        palette,
        shape: { borderRadius: 6 },
        typography: shadows(),
        customShadows: customShadows()
    }), [])
    const theme = createTheme(themeOptions)
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme} >
                <CssBaseline />
                <GlobalStyles />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeProvider