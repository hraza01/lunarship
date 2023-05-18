import { Titillium_Web } from 'next/font/google'

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
    <section className={`${titillium.className} w-full`}>
      <div className='isolate h-[calc(100dvh-4rem)] bg-lunarship-gray-200 lg:overflow-hidden'>
        {children}
      </div>
    </section>
  )
}
