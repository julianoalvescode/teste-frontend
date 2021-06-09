import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { Layout } from 'layouts'
import { ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from 'framer-motion'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { theme, GlobalStyle } from 'styles'

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Repo</title>
        <link rel="shortcut icon" href="/static/img/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/static/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Teste Front-end Juliano Alves" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <NextNprogress color="#414df7" startPosition={0.3} stopDelayMs={200} height={5} />
      <AnimateSharedLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default App
