'use client'

// @ts-ignore
export default function TickerInformation({ tickerInformation }) {
  const information = ['name', 'class', 'exchange', 'symbol', 'status']

  return (
    <div className='flex w-full flex-col'>
      <div className='grid w-full grid-cols-2 justify-items-stretch gap-2 rounded text-gray-100'>
        {information.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between rounded bg-white/5 px-4 py-2 text-xs uppercase text-gray-300 first:col-span-2'
          >
            <p className='font-bold uppercase text-gray-100'>{item}</p>
            <p>{tickerInformation[item].toString().replace('_', ' ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
