import { Titillium_Web } from 'next/font/google'
import Nav from '@/app/(app)/app/Nav'

const titillium = Titillium_Web({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Lunarship',
  description: 'The next gen trading app',
}
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${titillium.className}`}>
      <Nav />
      <div className='isolate h-[calc(100dvh-4rem)] lg:pl-72'>{children}</div>
    </section>
  )
}
