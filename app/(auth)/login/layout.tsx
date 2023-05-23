import '../../globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Lunarship - Login',
  description: 'The next gen trading app',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='h-screen bg-lunarship-gray-300'>
      <div className={`${heebo.className} h-full`}>{children}</div>
    </section>
  )
}
