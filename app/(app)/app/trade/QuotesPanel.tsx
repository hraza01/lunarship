// @ts-ignore
export default function QuotesPanel({ quotes }) {
  return (
    <div className='flex max-h-52 flex-col items-stretch justify-start rounded bg-white/5'>
      <div className='mb-1 grid w-full grid-cols-4 justify-items-center gap-1 rounded py-2 text-xs text-gray-100'>
        <p>Bid Size</p>
        <p>Bid Price</p>
        <p>Ask Price</p>
        <p>Ask Size</p>
      </div>
      <div>
        {quotes.length === 0 && (
          <div className='flex items-center justify-center p-10 text-xs text-gray-100'>
            Quotes unavailable
          </div>
        )}
        {quotes.map((quote, index) => (
          <div
            key={index}
            className='grid w-full grid-cols-4 justify-items-center gap-1 rounded pb-1 text-xs text-gray-100 last:pb-0'
          >
            <p className='w-full rounded bg-green-500 px-1 py-1.5 text-center text-gray-100'>
              {quote.bs}
            </p>
            <p className='w-full rounded bg-green-500 px-1 py-1.5 text-center text-gray-100'>
              {parseFloat(quote.bp).toFixed(2)}
            </p>
            <p className='w-full rounded bg-red-500 px-1 py-1.5 text-center text-gray-100'>
              {parseFloat(quote.ap).toFixed(2)}
            </p>
            <p className='w-full rounded bg-red-500 px-1 py-1.5 text-center text-gray-100'>
              {quote.as}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
