import Logo from '../_components/Logo';
import ModalWindow from '../_components/ModalWindow';
import ContextProvider from '../_context/Context';
import Footer from '../_layouts/Footer';
import Header from '../_layouts/Header';
import '../globals.css';
import type { Metadata } from 'next';
// import { Inter, Montserrat } from 'next/font/google'

// const montserrat = Montserrat({weight: "700"});

/**
 * Необходимо сделать:
 * 1 - брать префикс api из env файла
 */
export const metadata: Metadata = {
  title: 'Тартея',
  description: '',
} 

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <ContextProvider>
        <body>
          <Logo/>
          <Header/>
          <main>
          {children}
          </main>
          <Footer/>
          <ModalWindow/>
        </body>
      </ContextProvider>
    </html>
  );
}
