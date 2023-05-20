async function getTickerData(ticker: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/assets/${ticker}`
  )
  return res.json()
}

// @ts-ignore
export default async function TickerInformation({ ticker }) {
  const tickerInformation = await getTickerData(ticker)
  const information = ['name', 'class', 'exchange', 'symbol', 'status']

  return (
    <div className='flex w-full flex-col'>
      <div className='grid w-full grid-cols-2 justify-items-stretch gap-1.5 rounded text-gray-100'>
        {information.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between rounded bg-white/5 px-3.5 py-2.5 text-xs uppercase text-gray-300 first:col-span-2'
          >
            <p className='pr-4 font-bold uppercase text-gray-100'>{item}</p>
            <p className='text-right'>
              {tickerInformation[item]?.toString().replace('_', ' ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
