import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const stats = [
  { label: 'Business was founded', value: '2023' },
  { label: 'People on the team', value: '20+' },
  { label: 'Users on the platform', value: '50K+' },
  { label: 'Funding Secured', value: '$70M' },
]
const values = [
  {
    name: 'Be world-class.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description:
      'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description:
      'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
]
const team = [
  {
    name: 'Hasan Raza',
    role: 'Founder / CEO',
    imageUrl:
      'https://gitlab.com/uploads/-/system/user/avatar/11546379/avatar.png',
    location: 'Toronto, Canada',
  },
  // More people...
]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function About() {
  return (
    <div className='bg-gray-900 md:pb-24'>
      <main className='relative isolate py-24 sm:py-32'>
        {/* Header section */}
        <div className='mx-auto max-w-screen-2xl px-6 lg:px-8'>
          <div className='max-w-2xl text-left'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              We love to innovate
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          {/* Background */}
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
        </div>

        {/* Content section */}
        <div className='mx-auto mt-20 max-w-screen-2xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2'>
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className='mt-8'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas.
                </p>
              </div>
              <div>
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et
                  eget. Ultricies tellus felis id dignissim eget. Est augue
                  maecenas risus nulla ultrices congue nunc tortor. Enim et
                  nesciunt doloremque nesciunt voluptate.
                </p>
                <p className='mt-8'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <dl className='mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4'>
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className='flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6'
                >
                  <dt className='text-base leading-7 text-gray-300'>
                    {stat.label}
                  </dt>
                  <dd className='text-3xl font-semibold tracking-tight text-white'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-screen-2xl xl:px-8'>
          <img
            src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80'
            alt=''
            className='aspect-[9/4] w-full object-cover xl:rounded-3xl'
          />
        </div>

        {/* Values section */}
        <div className='mx-auto mt-32 max-w-screen-2xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Our values
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
          <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
            {values.map((value) => (
              <div key={value.name} className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <value.icon
                    className='absolute left-1 top-1 h-5 w-5 text-indigo-500'
                    aria-hidden='true'
                  />
                  {value.name}
                </dt>{' '}
                <dd className='inline'>{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className='mx-auto mt-32 max-w-screen-2xl px-6 sm:mt-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Our team
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
              neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
            </p>
          </div>
          <ul
            role='list'
            className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className='aspect-[14/13] w-full rounded-2xl object-cover'
                  src={person.imageUrl}
                  alt=''
                />
                <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-white'>
                  {person.name}
                </h3>
                <p className='text-base leading-7 text-gray-300'>
                  {person.role}
                </p>
                <p className='text-sm leading-6 text-gray-500'>
                  {person.location}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className='relative isolate -z-10 mt-32 sm:mt-40'>
          <div className='mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
            <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
              <img
                className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
                src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                alt=''
              />
              <div className='w-full flex-auto'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Join our team
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                <ul
                  role='list'
                  className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2'
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className='flex gap-x-3'>
                      <CheckCircleIcon
                        className='h-7 w-5 flex-none'
                        aria-hidden='true'
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className='mt-10 flex'>
                  <a
                    href='#'
                    className='text-sm font-semibold leading-6 text-indigo-400'
                  >
                    See our job postings <span aria-hidden='true'>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
