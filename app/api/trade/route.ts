import { NextResponse } from 'next/server'
import { btoa } from 'buffer'

const authKey = btoa(
  `${process.env.ALPACA_API_KEY}:${process.env.ALPACA_API_SECRET}`
)
export async function GET() {
  // testing
  const url = `${process.env.ALPACA_URL}/v1/accounts`

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${authKey}`,
    },
  }
  const res = await fetch(url, options)
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const url = `${process.env.ALPACA_URL}/v1/trading/accounts/7fe3ea14-36dd-45c6-aa77-088793c295ce/orders`
  const payload = await request.json()

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authKey}`,
    },
    body: JSON.stringify(payload),
  }

  const res = await fetch(url, options)
  const data = await res.json()

  return NextResponse.json(data)
}
