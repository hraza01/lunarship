import { Heebo } from 'next/font/google'
import Nav from '@web/(components)/Nav'
import Footer from '@web/(components)/Footer'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Lunarship',
  description: 'The next gen trading app',
}

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={heebo.className}>
      <Nav />
      {children}
      <Footer />
    </section>
  )
}
