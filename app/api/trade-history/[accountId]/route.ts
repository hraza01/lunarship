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
