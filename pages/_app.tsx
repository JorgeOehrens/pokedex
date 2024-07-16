
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Layout2 from '@/layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout2> 
      <Component {...pageProps} />
  </Layout2>
)

}