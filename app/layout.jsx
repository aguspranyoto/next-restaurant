import { Inter } from 'next/font/google'
import './globals.css'
import {Footer,Navbar} from '../components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Restaurant',
  description: 'Developed by Agus Pranyoto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}