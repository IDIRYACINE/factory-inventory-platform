import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import ServerProviders from '@/lib/ServerProviders';
import MainLayout from '@/lib/MainLayout';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Inventory App</title>
            </Head>
            <ServerProviders>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ServerProviders>
        </>

    )
}

export default App