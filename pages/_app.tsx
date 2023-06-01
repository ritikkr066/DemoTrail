import '@/styles/globals.css'
import '@/pages/footer.css'
import type { AppProps } from 'next/app'
import Navbar2 from '@/components/Navbar2'
import Footer1 from './Footer'

export default function App({ Component, pageProps }: AppProps) {
  return<><Navbar2/> <Component {...pageProps} /><Footer1/></>
}
