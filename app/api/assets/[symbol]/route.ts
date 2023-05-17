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
    params: { symbol: string }
  }
) {
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/assets/${params.symbol}`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${authKey}`,
    },
  }

  const res = await fetch(url, options)
  const data = await res.json()

  console.log(params.symbol)
  return NextResponse.json(data)
}
