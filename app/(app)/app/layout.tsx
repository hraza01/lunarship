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
    <section className={`${titillium.className} relative`}>
      <Nav />
      <div className='absolute h-[100dvh] w-full bg-slate-800 lg:pl-72'>
        {children}
      </div>
    </section>
  )
}
