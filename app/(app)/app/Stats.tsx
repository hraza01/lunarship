function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Stats({ stats }) {
  return (
    <dl className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded bg-white/5 px-4 py-10 sm:px-6 xl:px-8'
        >
          <dt className='text-base font-bold capitalize leading-6 text-indigo-600'>
            {stat.name.replaceAll('_', ' ')}
          </dt>
          <dd className='w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-100'>
            {stat.value || '$0'}
          </dd>
        </div>
      ))}
    </dl>
  )
}
