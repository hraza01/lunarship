// @ts-ignore
export default function QuotesPanel({ quotes }) {
  return (
    <div className='flex max-h-52 flex-col items-stretch'>
      <div className='grid w-full grid-cols-4 justify-items-center gap-1 rounded bg-white/5 py-2 text-xs text-gray-100'>
        <p>Bid Size</p>
        <p>Bid Price</p>
        <p>Ask Price</p>
        <p>Ask Size</p>
      </div>
      <div>
        {quotes.length === 0 && (
          <div className='flex items-center justify-center border-b p-10 text-xs text-gray-100'>
            Quotes unavailable during off hours
          </div>
        )}
        {quotes.map((quote, index) => (
          <div
            key={index}
            className='grid w-full grid-cols-4 justify-items-center gap-1 rounded bg-white/5 pb-1 text-xs text-gray-100 last:pb-0'
          >
            <p className='w-full rounded bg-green-500 px-4 py-1.5 text-center text-gray-100'>
              {quote.bs}
            </p>
            <p className='w-full rounded bg-green-500 px-4 py-1.5 text-center text-gray-100'>
              {parseFloat(quote.bp).toFixed(2)}
            </p>
            <p className='w-full rounded bg-red-500 px-4 py-1.5 text-center text-gray-100'>
              {quote.ap}
            </p>
            <p className='w-full rounded bg-red-500 px-4 py-1.5 text-center text-gray-100'>
              {quote.as}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
