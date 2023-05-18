// @ts-ignore
import { parseISO, fromUnixTime, format } from 'date-fns'
export default function RecentTransactions({ transactions }) {
  return (
    <div className='flex max-h-52 flex-col items-stretch justify-start rounded bg-white/5'>
      <div className='mb-1 grid w-full grid-cols-4 justify-items-center gap-2 rounded py-2 text-xs text-gray-100'>
        <p>Time</p>
        <p>Ticker</p>
        <p>Size</p>
        <p>Price</p>
      </div>
      <div>
        {transactions.length === 0 && (
          <div className='flex grow items-center justify-center p-10 text-xs text-gray-100'>
            Transactions unavailable
          </div>
        )}
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className='grid w-full grid-cols-4 justify-items-center gap-1 rounded pb-1 text-xs text-gray-100 last:pb-0'
          >
            <p className='w-full rounded bg-blue-900/40 px-1 py-1.5 text-center text-gray-100'>
              {format(parseISO(transaction.t), 'HH:MM:SS')}
            </p>
            <p className='w-full rounded bg-blue-900/40 px-1 py-1.5 text-center text-gray-100'>
              {transaction.S}
            </p>
            <p className='w-full rounded bg-blue-900/40 px-1 py-1.5 text-center text-gray-100'>
              {transaction.s ? transaction.s : 'N/A'}
            </p>
            <p className='w-full rounded bg-blue-900/40 px-1 py-1.5 text-center text-gray-100'>
              {transaction.p ? parseFloat(transaction.p).toFixed(2) : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
