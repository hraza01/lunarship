const stats = [
  {
    name: 'Total Equity',
    value: '$405,091.00',
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Buying Power',
    value: '$12,787.00',
    change: '+54.02%',
    changeType: 'negative',
  },
  {
    name: 'Pending Transfers Out',
    value: '$245,988.00',
    change: '-1.39%',
    changeType: 'positive',
  },
  {
    name: 'Pending Transfers In',
    value: '$30,156.00',
    change: '+10.18%',
    changeType: 'negative',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Stats() {
  return (
    <dl className='mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white/5 px-4 py-10 sm:px-6 xl:px-8'
        >
          <dt className='text-base font-bold leading-6 text-indigo-600'>
            {stat.name}
          </dt>
          <dd
            className={classNames(
              stat.changeType === 'negative'
                ? 'text-rose-600'
                : 'text-gray-700',
              'text-xs font-medium'
            )}
          >
            {stat.change}
          </dd>
          <dd className='w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-100'>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
