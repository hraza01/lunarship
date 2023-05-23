'use client'
import { useEffect, useState } from 'react'
import RecentTransactions from '@app/trade/(components)/RecentTransactions'
import QuotesPanel from '@app/trade/(components)/QuotesPanel'

export default function MarketData({ ticker }) {
  // const [isConnected, setIsConnected] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    // messages
    const authenticate = {
      action: 'auth',
      key: process.env.NEXT_PUBLIC_ALPACA_API_KEY,
      secret: process.env.NEXT_PUBLIC_ALPACA_API_SECRET,
    }

    const subscribe = JSON.stringify({
      action: 'subscribe',
      trades: [ticker],
      quotes: [ticker],
    })

    const unsubscribe = JSON.stringify({
      action: 'unsubscribe',
      trades: [ticker],
      quotes: [ticker],
    })

    // socket init on mount
    const socket = new WebSocket(process.env.NEXT_PUBLIC_ALPACA_WS)

    socket.onopen = function () {
      socket.send(JSON.stringify(authenticate))
    }

    socket.onerror = function () {
      throw Error('Websocket connection error')
    }

    socket.onmessage = async function (event) {
      const response = await JSON.parse(event.data)
      console.log(response[0])

      response[0].T === 't' &&
        // @ts-ignore
        setTransactions((prevState: any[]) => [...response, ...prevState])

      response[0].T === 'q' &&
        // @ts-ignore
        setQuotes((prevState: any[]) => [...response, ...prevState])
    }

    socket.readyState === 1 && socket.send(subscribe)

    return () => {
      // socket closure on unmount
      // @ts-ignore
      socket.readyState === 1 && socket.send(unsubscribe) && socket.close()
    }
  }, [ticker])

  return (
    <>
      <div>
        <h4 className='mb-2 text-xs font-semibold text-gray-400'>
          Recent Transactions
        </h4>
        <RecentTransactions transactions={transactions.slice(0, 5)} />
      </div>
      <div>
        <h4 className='mb-2 text-xs font-semibold text-gray-400'>
          Live Quotes
        </h4>
        <QuotesPanel quotes={quotes.slice(0, 5)} />
      </div>
    </>
  )
}
