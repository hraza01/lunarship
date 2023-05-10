import './globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Lunarship',
  description: 'The next gen trading app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
