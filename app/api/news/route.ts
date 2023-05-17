import { NextResponse } from 'next/server'
import { btoa } from 'buffer'

const authKey = btoa(
  `${process.env.NEXT_PUBLIC_ALPACA_API_KEY}:${process.env.NEXT_PUBLIC_ALPACA_API_SECRET}`
)

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { accountId: string }
  }
) {
  const url = `${process.env.NEXT_PUBLIC_ALPACA_DATA_URL}/v1beta1/news`
  const options = {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': process.env.ALPACA_NEWS_API_KEY,
      'APCA-API-SECRET-KEY': process.env.ALPACA_NEWS_SECRET_KEY,
    },
  }

  const res = await fetch(url, options)
  const data = await res.json()

  return NextResponse.json(data)
}
