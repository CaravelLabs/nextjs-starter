import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import  theme from '../theme/theme'
import { CssBaseline } from '@material-ui/core'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={theme}> <CssBaseline />< Component {...pageProps} /></ThemeProvider>
  )
}
export default MyApp
