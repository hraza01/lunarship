'use client'
import { useEffect, useState } from 'react'
import RecentTransactions from '@app/trade/(components)/RecentTransactions'
import QuotesPanel from '@app/trade/(components)/QuotesPanel'
import useWebSocket from 'react-use-websocket'

const WSS_FEED_URL: string = process.env.NEXT_PUBLIC_ALPACA_WS
export default function MarketData({ ticker }) {
  const [transactions, setTransactions] = useState([])
  const [quotes, setQuotes] = useState([])

  const authenticate = {
    action: 'auth',
    key: process.env.NEXT_PUBLIC_ALPACA_API_KEY,
    secret: process.env.NEXT_PUBLIC_ALPACA_API_SECRET,
  }

  const subscribe = {
    action: 'subscribe',
    trades: [ticker],
    quotes: [ticker],
  }

  const unsubscribe = {
    action: 'unsubscribe',
    trades: [ticker],
    quotes: [ticker],
  }

  function onOpen() {
    sendJsonMessage(authenticate)
  }

  const { sendJsonMessage, getWebSocket } = useWebSocket(WSS_FEED_URL, {
    onOpen: onOpen,
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: (closeEvent) => true,
    onMessage: async (event: WebSocketEventMap['message']) => {
      const message = await JSON.parse(event.data)

      message[0].T === 't' &&
        // @ts-ignore
        setTransactions((prevState: any[]) => [...message, ...prevState])

      message[0].T === 'q' &&
        // @ts-ignore
        setQuotes((prevState: any[]) => [...message, ...prevState])
    },
  })

  useEffect(() => {
    sendJsonMessage(subscribe)

    return () => {
      sendJsonMessage(unsubscribe)
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
