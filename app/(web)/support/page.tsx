import Accordion from '@/components/Accordion'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about lunarship?",
    answer:
      "I don't know, but the platform is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about lunarship?",
    answer:
      "I don't know, but the platform is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about lunarship?",
    answer:
      "I don't know, but the platform is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about lunarship?",
    answer:
      "I don't know, but the platform is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

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

export default function Support() {
  return (
    <>
      <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <div className='mx-auto max-w-screen-2xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Support center
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
            <svg x='100%' y={-1} className='overflow-visible fill-gray-800/20'>
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
      </div>

      <div className='bg-gray-900'>
        <div className='mx-auto max-w-screen-2xl px-6 py-16 sm:py-24 lg:px-8'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-white'>
            Frequently asked questions
          </h2>
          <p className='mt-6 max-w-2xl text-base leading-7 text-gray-300'>
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href='#'
              className='hover:text-indigo-30 font-semibold text-indigo-400 hover:text-indigo-300'
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
          <div className='mt-20'>
            <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10'>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className='text-base font-semibold leading-7 text-white'>
                    {faq.question}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-300'>
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Accordion />
      </div>
    </>
  )
}
