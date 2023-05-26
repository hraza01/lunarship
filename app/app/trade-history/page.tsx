import { parseISO, format } from 'date-fns'

async function getTradeHistory(accountId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/trading/${accountId}`
  )
  return res.json()
}

export default async function TradeHistory() {
  const accountId = '0d178bce-9019-40c3-9841-29544381d812'
  const trades = await getTradeHistory(accountId)

  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
      <div className='flex w-full flex-col p-4'>
        <h3 className='mb-4 font-bold'>Trade History</h3>
        <div className='flex w-full flex-col'>
          <div className='grid w-full grid-cols-9 justify-items-center gap-2 rounded-t bg-gray-700 p-4 text-sm text-gray-100'>
            <p className='font-bold uppercase'>asset class</p>
            <p className='font-bold uppercase'>order type</p>
            <p className='font-bold uppercase'>side</p>
            <p className='font-bold uppercase'>symbol</p>
            <p className='font-bold uppercase'>filled qty</p>
            <p className='font-bold uppercase'>filled price</p>
            <p className='font-bold uppercase'>status</p>
            <p className='font-bold uppercase'>submitted at</p>
            <p className='font-bold uppercase'>updated at</p>
          </div>
        </div>

        <div className='flex w-full flex-col overflow-y-auto rounded-b'>
          {trades.map((trade) => (
            <div
              key={trade.id}
              className='grid w-full grid-cols-9 items-center justify-items-center gap-2 border-b border-gray-400/30 bg-white/5 p-4 text-sm text-gray-100 last:border-none'
            >
              <p className='uppercase'>{trade.asset_class.replace('_', ' ')}</p>
              <p className='uppercase'>{trade.type}</p>
              <p className='uppercase'>{trade.side}</p>
              <p className='uppercase'>{trade.symbol}</p>
              <p className='uppercase'>{trade.filled_qty}</p>
              <p className='uppercase'>{trade.filled_avg_price}</p>
              <p className='capitalize'>{trade.status}</p>
              <p className='uppercase'>
                {format(
                  parseISO(trade.submitted_at),
                  'MMM dd, yyyy hh:mm aaaa'
                )}
              </p>
              <p className='uppercase'>
                {format(parseISO(trade.updated_at), 'MMM dd, yyyy hh:mm aaaa')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
