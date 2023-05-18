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

// isolate flex h-[calc(100dvh-4rem)] bg-lunarship-gray-200 lg:pl-72
// ml-auto bg-lunarship-gray-200 lg:w-[calc(100%_-_18rem)]
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${titillium.className} h-full w-full`}>
      <Nav />
      <div className='ml-auto h-[calc(100dvh-4rem)] bg-lunarship-gray-200 lg:inset-y-0 lg:w-[calc(100%_-_18rem)]'>
        {children}
      </div>
    </section>
  )
}
