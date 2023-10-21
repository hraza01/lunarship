import { NextRequest, NextResponse } from 'next/server'
import { btoa } from 'buffer'

const authKey = btoa(
  `${process.env.NEXT_PUBLIC_ALPACA_API_KEY}:${process.env.NEXT_PUBLIC_ALPACA_API_SECRET}`
)

export async function GET(request: NextRequest) {
  // @ts-ignore
  // const symbol: string = request.nextUrl.searchParams.get('symbol')

  // if (!symbol || symbol === '') return NextResponse.json([])
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/assets`
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Basic ${authKey}`,
      // connection: 'close',
    },
  }

  const res = await fetch(url, options)
  const data = await res.json()
  const tradable_assets = data.filter((asset: any) => {
    return (
      asset['tradable'] === true
      // &&
      // (asset.name.toLowerCase().includes(symbol.toLowerCase()) ||
      // asset.symbol.toLowerCase().includes(symbol.toLowerCase()))
    )
  })

  return NextResponse.json(tradable_assets)
}
