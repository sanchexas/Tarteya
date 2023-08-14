import Logo from '../_components/Logo';
import ModalWindow from '../_components/ModalWindow';
import Footer from '../_layouts/Footer';
import Header from '../_layouts/Header';
import '../globals.css';
import AppContext from '../_context/state';
import type { Metadata } from 'next';
import { useState } from 'react';
// import { Inter, Montserrat } from 'next/font/google'

// const montserrat = Montserrat({weight: "700"});

export const metadata: Metadata = {
  title: 'Тартея',
  description: '',
} 

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [nameContext, setNameContext] = useState("fdsf")
  return (
    <html lang="ru">
      <AppContext.Provider value={{nameContext, setNameContext}}>
        <body>
          <Logo/>
          <Header/>
          <main>
          {children}
          </main>
          <Footer/>
          {/* Здесь расположить модальные окна */}
          <ModalWindow isActive={true}>
            <div>
                dfddf
            </div>
          </ModalWindow>
      </body>
      </AppContext.Provider>
      
    </html>
  );
}
