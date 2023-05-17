'use client'
import { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns'
import { Spinner } from 'flowbite-react'
export default function TradeHistory() {
  const [loading, setLoading] = useState(true)
  const [trades, setTrades] = useState([])
  sessionStorage.setItem('accountId', '0d178bce-9019-40c3-9841-29544381d812')

  const accountId = sessionStorage.getItem('accountId')

  useEffect(() => {
    async function getTradeHistory() {
      const res = await fetch(`/api/trade-history/${accountId}`)
      const data = await res.json()

      setTrades(data)
      setLoading(false)
    }

    getTradeHistory()
  }, [accountId])

  if (loading) {
    return (
      <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
        <div className='flex w-full flex-col gap-4 p-4'>
          <h3 className='font-bold'>Trade History</h3>
          <div className='flex h-[50rem] w-full items-center justify-center rounded border border-gray-400'>
            <Spinner color='purple' aria-label='Purple spinner example' />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
      <div className='flex w-full flex-col gap-4 p-4'>
        <p className='font-bold'>Trade History</p>
        <div className='flex h-[50rem] w-full flex-col'>
          <div className='grid w-full grid-cols-9 justify-items-center gap-2 rounded bg-gray-700 px-4 py-2 text-xs text-gray-100'>
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
          {trades.map((trade) => (
            <div
              key={trade.id}
              className='grid w-full grid-cols-9 items-center justify-items-center gap-2 border-b p-4 text-xs text-gray-100'
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
