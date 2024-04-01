import type {AppProps} from 'next/app'

import RootLayout from '@layouts/layout'
import Transition from '@components/Transition'
import PageAnimatePresence from '@components/HOC/PageAnimatePresence'

import "@styles/globals.css"

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <RootLayout>
            <PageAnimatePresence>
                <Transition />
                <Component {...pageProps} />
            </PageAnimatePresence>
        </RootLayout>
    )
}  