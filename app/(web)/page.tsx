import {
  ArrowPathIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  ServerIcon,
  CreditCardIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const primaryFeatures = [
  {
    name: 'Real-time quotes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Paper trading',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Backtesting',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: CalendarDaysIcon,
  },
]
const secondaryFeatures = [
  {
    name: 'Real-time trading.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: TicketIcon,
  },
  {
    name: 'Zero Commission',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: CreditCardIcon,
  },
  {
    name: 'Paper Trading',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Backed by Alpaca Brokerage API.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Beautiful Interface',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
]
const stats = [
  { id: 1, name: 'Traders on the platform', value: '8,000+' },
  { id: 2, name: 'Daily trades', value: '900m+' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Financial Institution Partners', value: '12+' },
]

export default function Home() {
  return (
    <div className='bg-gray-900'>
      <main>
        {/* Hero section */}
        <div className='relative isolate overflow-hidden'>
          <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] lg:h-[46rem]'>
            <svg
              className='absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2'
                  width={200}
                  height={200}
                  x='100%'
                  y={-1}
                  patternUnits='userSpaceOnUse'
                >
                  <path d='M130 200V.5M.5 .5H200' fill='none' />
                </pattern>
              </defs>
              <svg
                x='100%'
                y={-1}
                className='overflow-visible fill-gray-800/20'
              >
                <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
              </svg>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)'
              />
            </svg>
            <div
              className='absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]'
              aria-hidden='true'
            >
              <div
                className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20'
                style={{
                  clipPath:
                    'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                }}
              />
            </div>
            <div className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'>
              <div
                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
              <div
                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          <div
            className='absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
            aria-hidden='true'
          >
            <div
              className='aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-40'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-screen-2xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40'>
            <div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
              <div className=''>
                <a href='#' className='inline-flex space-x-6'>
                  <span className='rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20'>
                    Latest updates
                  </span>
                  <span className='inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300'>
                    <span>Just shipped v1.0</span>
                    <ChevronRightIcon
                      className='h-5 w-5 text-gray-500'
                      aria-hidden='true'
                    />
                  </span>
                </a>
              </div>
              <h1 className='mt-10 bg-gradient-to-r from-violet-600 via-sky-400 to-fuchsia-300 bg-clip-text py-4 text-4xl font-bold tracking-tight text-transparent sm:text-6xl'>
                We'll match your trading needs with blazingly fast speed
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 ease-in-out hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
                >
                  Get started
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-white'
                >
                  Live demo <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32'>
              <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                <img
                  src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                  alt='App screenshot'
                  width={2432}
                  height={1442}
                  className='w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className='mx-auto mt-8 max-w-screen-2xl px-6 sm:mt-16 lg:px-8'>
          <h2 className='text-center text-lg font-semibold leading-8 text-white'>
            The world’s most innovative companies use our app
          </h2>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg'
              alt='Transistor'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/reform-logo-white.svg'
              alt='Reform'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg'
              alt='Tuple'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg'
              alt='SavvyCal'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg'
              alt='Statamic'
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className='mx-auto mt-32 max-w-screen-2xl px-6 sm:mt-56 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-400'>
              Deploy faster
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Everything you need to trade efficiently
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className='flex flex-col'>
                  <dt className='text-base font-semibold leading-7 text-white'>
                    <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300'>
                    <p className='flex-auto'>{feature.description}</p>
                    <p className='mt-6'>
                      <a
                        href={feature.href}
                        className='text-sm font-semibold leading-6 text-indigo-400'
                      >
                        Learn more <span aria-hidden='true'>→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className='mt-32 sm:mt-56'>
          <div className='mx-auto max-w-screen-2xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='text-base font-semibold leading-7 text-indigo-400'>
                Everything you need
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                No funds? No problem.
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Use our paper trading option to learn to trade and when you feel
                ready, jump right into the market!
              </p>
            </div>
          </div>
          <div className='relative overflow-hidden pt-16'>
            <div className='mx-auto max-w-screen-2xl px-6 lg:px-8'>
              <img
                src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                alt='App screenshot'
                className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10'
                width={2432}
                height={1442}
              />
              <div className='relative' aria-hidden='true'>
                <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]' />
              </div>
            </div>
          </div>
          <div className='mx-auto mt-16 max-w-screen-2xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
            <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='inline font-semibold text-white'>
                    <feature.icon
                      className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>{' '}
                  <dd className='inline'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className='mx-auto mt-32 max-w-screen-2xl px-6 sm:mt-56 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
            <h2 className='text-base font-semibold leading-8 text-indigo-400'>
              Our track record
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Trusted by thousands of investors&nbsp;worldwide
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='flex flex-col gap-y-3 border-l border-white/10 pl-6'
              >
                <dt className='text-sm leading-6'>{stat.name}</dt>
                <dd className='order-first text-3xl font-semibold tracking-tight'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className='relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='1d4240dd-898f-445f-932d-e2872fd12de3'
                width={200}
                height={200}
                x='50%'
                y={0}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={0} className='overflow-visible fill-gray-800/20'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#1d4240dd-898f-445f-932d-e2872fd12de3)'
            />
          </svg>
          <div
            className='absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Boost your trade returns.
              <br />
              Start using our app today.
            </h2>
            <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Get started
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-white'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
