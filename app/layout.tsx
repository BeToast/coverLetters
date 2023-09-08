import './globals.css'
import type { Metadata } from 'next'

// font
import { Kaisei_HarunoUmi, Bai_Jamjuree, } from 'next/font/google';
const fontHead = Kaisei_HarunoUmi({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  variable: '--font-head',
});
const fontBody = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Blake Preston',
  description: 'this is my cover letter',
}

// //is production?????????????? sheeeesssshhhh!!
// const isProduction = process.env.NODE_ENV === "production";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${fontHead.variable} ${fontBody.variable} scroll-smooth`}>
      <head>
      </head>
      <body className="h-screen w-screen">
        {children}
      </body>
    </html>
  )
}
