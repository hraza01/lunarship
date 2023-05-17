// @ts-ignore
import { parseISO, fromUnixTime, format } from 'date-fns'
export default function RecentTransactions({ transactions }) {
  return (
    <div className='flex max-h-40 flex-col items-stretch '>
      <div className='grid w-full grid-cols-4 justify-items-center gap-2 rounded bg-white/5 px-4 py-2 text-xs text-gray-100'>
        <p>Time</p>
        <p>Ticker</p>
        <p>Size</p>
        <p>Price</p>
      </div>
      <div className='overflow-y-scroll'>
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className='grid w-full grid-cols-4 justify-items-center gap-2 border-b px-4 py-1.5 text-xs text-gray-100'
          >
            <p>{format(parseISO(transaction.t), 'HH:MM:SS')}</p>
            <p>{transaction.S}</p>
            <p>{transaction.s}</p>
            <p>{transaction.p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
