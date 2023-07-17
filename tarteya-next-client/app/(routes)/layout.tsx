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
      <body>{children}</body>
    </html>
  );
}
