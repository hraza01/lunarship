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
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/trading/accounts/${params.accountId}/orders?status=all`

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

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: { accountId: string }
  }
) {
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/trading/accounts/${params.accountId}/orders`
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

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { accountId: string }
  }
) {
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/trading/accounts/${params.accountId}/orders`
  const payload = await request.json()

  const options = {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${authKey}`,
    },
    body: JSON.stringify(payload),
  }

  const res = await fetch(url, options)
  const data = await res.json()

  return NextResponse.json(data)
}
