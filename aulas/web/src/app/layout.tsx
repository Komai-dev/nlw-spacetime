import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const robotoFlex = Roboto({ subsets: ['latin'], variable: '--font-robotoFlex' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  variable: '--font-baiJamjuree',
  weight: '700',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma Cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${robotoFlex.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
