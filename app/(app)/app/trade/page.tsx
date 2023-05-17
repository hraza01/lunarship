'use client'
import { useState, useEffect } from 'react'
import alpacaConnect from '@/app/(app)/app/(alpaca)/alpaca'
import Chart from '@/app/(app)/app/trade/Chart'
import TickerInformation from '@/app/(app)/app/trade/TickerInformation'
import RecentTransactions from '@/app/(app)/app/trade/RecentTransactions'
import QuotesPanel from '@/app/(app)/app/trade/QuotesPanel'
import TransactionPanel from '@/app/(app)/app/trade/TransactionPanel'

export default function Trade() {
  // test data
  const tradeData = [
    {
      T: 't',
      i: 96921,
      S: 'AAPL',
      x: 'D',
      p: 126.55,
      s: 1,
      t: '2021-02-22T15:51:44.208Z',
      c: ['@', 'I'],
      z: 'C',
    },
    {
      T: 't',
      i: 96921,
      S: 'AAPL',
      x: 'D',
      p: 126.55,
      s: 1,
      t: '2021-02-22T15:51:44.208Z',
      c: ['@', 'I'],
      z: 'C',
    },
  ]

  const quoteData = [
    {
      T: 'q',
      S: 'AAPL',
      bx: 'V',
      bp: 169,
      bs: 1,
      ax: 'V',
      ap: 171.98,
      as: 4,
      c: ['R'],
      z: 'C',
      t: '2023-05-16T18:10:21.192116817Z',
    },
    {
      T: 'q',
      S: 'AAPL',
      bx: 'V',
      bp: 169,
      bs: 1,
      ax: 'V',
      ap: 171.98,
      as: 4,
      c: ['R'],
      z: 'C',
      t: '2023-05-16T18:10:21.192116817Z',
    },
  ]

  const [ticker, setTicker] = useState('AAPL')
  const [recentTransactions, setRecentTransactions] = useState([...tradeData])
  const [quotes, setQuotes] = useState([...quoteData])
  const [tickerInformation, setTickerInformation] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // live data
    const socket = new WebSocket(process.env.NEXT_PUBLIC_ALPACA_WS)
    alpacaConnect(socket)
    socket.onmessage = function (event) {
      const response = JSON.parse(event.data)
      console.log(response[0])

      response[0].T === 't' &&
        setRecentTransactions((prevState) => {
          return [...response, ...prevState]
        })

      response[0].T === 'q' &&
        setQuotes((prevState) => {
          return [...response, ...prevState]
        })
    }

    // symbol information
    const getTickerInformation = async () => {
      const res = await fetch(`/api/assets/${ticker}`)
      const data = await res.json()
      setTickerInformation(data)
    }

    const subscribe = JSON.stringify({
      action: 'subscribe',
      trades: [ticker],
      quotes: [ticker],
    })

    getTickerInformation().then(() => {
      socket.send(subscribe)
      setLoading(false)
    })

    // socket.readyState ?? socket.send(request)

    return () => {
      const unsubscribe = JSON.stringify({
        action: 'unsubscribe',
        trades: [ticker],
        quotes: [ticker],
      })

      socket.readyState && socket.send(unsubscribe) && socket.close()
    }
  }, [ticker])

  if (loading)
    return (
      <main className='flex h-full w-full flex-col bg-lunarship-gray-200 lg:flex-row'>
        Spinner
      </main>
    )

  return (
    <main className='flex w-full flex-col bg-lunarship-gray-200 lg:flex-row'>
      <div className='flex-grow justify-self-center lg:w-4/5'>
        <Chart ticker={ticker} />
      </div>
      <div className='bg-lunarship-gray-300 p-4 lg:w-full lg:max-w-xs'>
        <div className='grid grid-cols-1 gap-12'>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>
              Information
            </h4>
            <TickerInformation tickerInformation={tickerInformation} />
          </div>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>
              Recent Transactions
            </h4>
            <RecentTransactions transactions={recentTransactions} />
          </div>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>
              Live Quotes
            </h4>
            <QuotesPanel quotes={quotes} />
          </div>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>Orders</h4>
            <div className='flex w-full items-center justify-center rounded'>
              <TransactionPanel ticker={ticker} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
