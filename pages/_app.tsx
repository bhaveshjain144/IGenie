import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en');
  }, []);
  return (
    <><Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>FreshBee</title>
    </Head><Component {...pageProps} /></>
  )
}

export default MyApp
