import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as JotaiProvider } from 'jotai'
import Head from 'next/head'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JotaiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </JotaiProvider>
    </>
  )
}

export default MyApp
