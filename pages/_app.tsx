import '../styles/globals.css'
import '../styles/playground.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { MainLayout } from '../components/layout/main-layout'
import { Analytics } from '@vercel/analytics/react'

const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {}
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {}
    }
})

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </AnimatePresence>
            </NextUIProvider>
            <Analytics />
        </NextThemesProvider>
    )
}

export default MyApp
