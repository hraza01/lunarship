// REQUEST
// {
//   "transfer_type": "ach",
//   "relationship_id": "05597b51-c114-4729-a804-00e1486a7b4c",
//   "amount": "1234.56",
//   "direction": "INCOMING"
// }

// RESPONSE
// {
//   "id": "a484239d-4d43-4653-93e6-738c48cceab0",
//   "relationship_id": "05597b51-c114-4729-a804-00e1486a7b4c",
//   "account_id": "271cfbac-24c5-4fec-b3a0-b9b7a237ef22",
//   "type": "ach",
//   "status": "QUEUED",
//   "amount": "1234.56",
//   "instant_amount": "0",
//   "direction": "INCOMING",
//   "created_at": "2023-05-17T17:53:49.437549733-04:00",
//   "updated_at": "2023-05-17T17:53:49.437549733-04:00",
//   "expires_at": "2023-05-24T17:53:49.436671894-04:00",
//   "reason": null,
//   "hold_until": null,
//   "requested_amount": "1234.56",
//   "fee": "0",
//   "fee_payment_method": "user"
// }

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
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/accounts/${params.accountId}/transfers`

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
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/accounts/${params.accountId}/transfers`
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
