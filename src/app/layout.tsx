import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Inter, Share_Tech_Mono } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const shareTechMono = Share_Tech_Mono({
  weight: '400',
  variable: '--share-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'T-Shirt Tech',
  description: 'The better T-Shirt Tech in the world',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${shareTechMono.variable} dark flex flex-col items-center`}
      >
        <main className='w-[1280px]'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
