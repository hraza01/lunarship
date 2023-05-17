// @ts-ignore
export default function QuotesPanel({ quotes }) {
  return (
    <div className='flex max-h-40 flex-col items-stretch'>
      <div className='grid w-full grid-cols-4 justify-items-center gap-2 rounded bg-white/5 px-4 py-2 text-xs text-gray-100'>
        <p>Bid Size</p>
        <p>Bid Price</p>
        <p>Ask Price</p>
        <p>Ask Size</p>
      </div>
      <div className='overflow-y-scroll'>
        {quotes.map((quote, index) => (
          <div
            key={index}
            className='grid w-full grid-cols-4 justify-items-center gap-2 border-b px-4 py-1.5 text-xs text-gray-100'
          >
            <p>{quote.bs}</p>
            <p>{quote.bp}</p>
            <p>{quote.ap}</p>
            <p>{quote.as}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
