import { Titillium_Web } from 'next/font/google'
import Nav from '@app/(components)/Nav'
import Search from '@app/(components)/Search'

const titillium = Titillium_Web({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Lunarship - App',
  description: 'The next gen trading app',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${titillium.className} h-full w-full`}>
      <Search />
      <Nav />
      <div className='ml-auto h-screen bg-lunarship-gray-200 lg:inset-y-0 lg:w-[calc(100%_-_18rem)]'>
        {children}
      </div>
    </section>
  )
}
