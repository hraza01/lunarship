'use client'
import { useEffect, useState } from 'react'
export default function Quotes({ ticker }) {
  const [loading, setLoading] = useState('')
  const [quote, setQuote] = useState({})

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_ALPACA_WS)

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: 'auth',
          key: process.env.NEXT_PUBLIC_ALPACA_API_KEY,
          secret: process.env.NEXT_PUBLIC_ALPACA_API_SECRET,
        })
      )
    }

    socket.onmessage = ({ data }) => {
      console.log('message from alpaca ', data)
    }

    setQuote({
      T: 'q',
      S: 'AMD',
      bx: 'U',
      bp: 87.66,
      bs: 1,
      ax: 'Q',
      ap: 87.68,
      as: 4,
      t: '2021-02-22T15:51:45.335689322Z',
      c: ['R'],
      z: 'C',
    })

    return () => {
      socket.close()
    }
  }, [ticker])

  if (loading) {
    return <div>Loading Spinner</div>
  }

  return (
    <div className='flex h-80 flex-col items-start'>
      <div className='grid w-full grid-cols-4 justify-items-center gap-2 rounded bg-white/5 px-4 py-2 text-xs text-gray-100'>
        <p>Bid Size</p>
        <p>Bid Price</p>
        <p>Ask Price</p>
        <p>Ask Size</p>
      </div>
      <div className='grid w-full grid-cols-4 justify-items-center gap-2 border-b px-4 py-1.5 text-xs text-gray-100'>
        <p>{quote.bs}</p>
        <p>{quote.bp}</p>
        <p>{quote.ap}</p>
        <p>{quote.as}</p>
      </div>
    </div>
  )
}
