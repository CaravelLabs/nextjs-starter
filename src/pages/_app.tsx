import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import StoreProvider from '../modules/common/StoreProvider'
import theme from '../theme/theme'
import { CssBaseline } from '@mui/material'
import { TextConstants } from '../modules/common/TextConstants'

function MyApp(props: AppProps): JSX.Element {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <title>{TextConstants.ApplicationName}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <ThemeProvider theme={theme}>
                <StoreProvider>
                    <CssBaseline />
                    <Component {...pageProps} />
                </StoreProvider>
            </ThemeProvider>
        </>
    )
}
export default MyApp
