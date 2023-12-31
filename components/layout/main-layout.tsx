import Head from 'next/head'
import React from 'react'

import { Footer } from '../footer'
import { NavbarWrapper } from '../navbar'
import { Box } from '../styles/box'

interface Props {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <Box as="main">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Harish Kumar's homepage" />
                <meta name="author" content="Harish Kumar" />
                <meta name="author" content="lonewolf_hk" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta name="twitter:title" content="Harish Kumar" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@lonewolf_hk" />
                <meta name="twitter:creator" content="@lonewolf_hk" />
                <meta property="og:site_name" content="Harish Kumar" />
                <meta name="og:title" content="Harish Kumar" />
                <meta property="og:type" content="website" />
                <title>Harish Kumar - Homepage</title>
            </Head>

            <NavbarWrapper />
            <Box
                css={{
                    height: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                {children}
                <Footer />
            </Box>
        </Box>
    )
}
