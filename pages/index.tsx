import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar2 from '@/components/Navbar2';
import Home1 from '@/components/Home';
import Footer1 from '@/pages/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     {/* <Navbar2/> */}
        <Home1/>
        {/* <Footer1/> */}
    </>
  )
}
