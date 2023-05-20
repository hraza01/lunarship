import { Titillium_Web } from 'next/font/google'

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
    <section className={`${titillium.className} w-full`}>
      <div className='isolate h-screen bg-lunarship-gray-200 lg:overflow-hidden'>
        {children}
      </div>
    </section>
  )
}
