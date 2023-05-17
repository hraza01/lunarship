import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { LifebuoyIcon, NewspaperIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'Sales',
    description:
      'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description:
      'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description:
      'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]
export default function Contact() {
  return (
    <>
      <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <div className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-screen-2xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Contact Us
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
            {cards.map((card) => (
              <div
                key={card.name}
                className='flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10'
              >
                <card.icon
                  className='h-7 w-5 flex-none text-indigo-400'
                  aria-hidden='true'
                />
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-white'>{card.name}</h3>
                  <p className='mt-2 text-gray-300'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mx-auto grid max-w-screen-2xl grid-cols-1 lg:grid-cols-2'>
          <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
              <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-full'>
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
              </div>
              <h2 className='text-3xl font-bold tracking-tight text-white'>
                Lets talk!
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className='mt-10 space-y-4 text-base leading-7 text-gray-300'>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Address</span>
                    <BuildingOffice2Icon
                      className='h-7 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    460 King St W
                    <br />
                    Toronto, ON M5V 1L7
                  </dd>
                </div>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Telephone</span>
                    <PhoneIcon
                      className='h-7 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <a
                      className='hover:text-white'
                      href='tel:+1 (647) 667-7490'
                    >
                      +1 (647) 667-7490
                    </a>
                  </dd>
                </div>
                <div className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>Email</span>
                    <EnvelopeIcon
                      className='h-7 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </dt>
                  <dd>
                    <a
                      className='hover:text-white'
                      href='mailto:hello@lunarship.io'
                    >
                      hello@lunarship.io
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action='#'
            method='POST'
            className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
          >
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-semibold leading-6 text-white'
                  >
                    First name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-semibold leading-6 text-white'
                  >
                    Last name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-white'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      autoComplete='email'
                      className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='phone-number'
                    className='block text-sm font-semibold leading-6 text-white'
                  >
                    Phone number
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='tel'
                      name='phone-number'
                      id='phone-number'
                      autoComplete='tel'
                      className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold leading-6 text-white'
                  >
                    Message
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      name='message'
                      id='message'
                      rows={4}
                      className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 flex justify-end'>
                <button
                  type='submit'
                  className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*<div className='relative isolate bg-gray-900'>*/}
      {/*</div>*/}
    </>
  )
}
