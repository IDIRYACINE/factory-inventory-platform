import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import MainLayout from '@/lib/MainLayout';
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
    return (

        <MainLayout>
            <Head>
                <title>Inventory App</title>
            </Head>
            <Component {...pageProps} />
        </MainLayout>

    )
}


export default appWithTranslation(App)