import { Heebo } from 'next/font/google'
import Nav from '@/app/(web)/Nav'
import Footer from '@/app/(web)/Footer'

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
