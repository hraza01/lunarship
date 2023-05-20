'use client'
import { useEffect, useState } from 'react'
import RecentTransactions from '@/app/(app)/app/trade/(components)/RecentTransactions'
import QuotesPanel from '@/app/(app)/app/trade/(components)/QuotesPanel'
import alpacaConnect from '@/app/(app)/app/(alpaca)/alpaca'

export default function MarketData({ ticker }) {
  const [isConnected, setIsConnected] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_ALPACA_WS)
    alpacaConnect(socket, setIsConnected)

    socket.onmessage = async function (event) {
      const response = await JSON.parse(event.data)
      console.log(response[0])

      response[0].T === 't' &&
        setTransactions((prevState: any[]) => [...response, ...prevState])

      response[0].T === 'q' &&
        setQuotes((prevState: any[]) => [...response, ...prevState])
    }

    const subscribe = JSON.stringify({
      action: 'subscribe',
      trades: [ticker],
      quotes: [ticker],
    })

    socket.readyState === 1 && socket.send(subscribe)

    return () => {
      const unsubscribe = JSON.stringify({
        action: 'unsubscribe',
        trades: [ticker],
        quotes: [ticker],
      })

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
