import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import ServerProviders from '@/lib/ServerProviders';
import MainLayout from '@/lib/MainLayout';
import { NextIntlProvider } from 'next-intl';

function App({ Component, pageProps }: AppProps) {
    return (

        <NextIntlProvider messages={pageProps.messages}>
            <MainLayout>
                <Head>
                    <title>Inventory App</title>
                </Head>
                <Component {...pageProps} />
            </MainLayout>
        </NextIntlProvider>

    )
}


export default App