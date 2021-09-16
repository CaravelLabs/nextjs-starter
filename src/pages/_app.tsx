import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/theme'
import { CssBaseline } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            {' '}
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
export default MyApp
