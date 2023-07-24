import Logo from '../_components/Logo';
import Footer from '../_layouts/Footer';
import Header from '../_layouts/Header'
import '../globals.css'
import type { Metadata } from 'next'
// import { Inter, Montserrat } from 'next/font/google'

// const montserrat = Montserrat({weight: "700"});

export const metadata: Metadata = {
  title: 'Тартея',
  description: '',
} 

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body>
        <Logo/>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
