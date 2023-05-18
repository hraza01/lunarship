// /v1/accounts/271cfbac-24c5-4fec-b3a0-b9b7a237ef22/ach_relationships
// /v1/accounts/{account_id}/ach_relationships
// REQUEST
// {
//   "account_owner_name": "Awesome Alpaca",
//   "bank_account_type": "CHECKING",
//   "bank_account_number": "32131231abc",
//   "bank_routing_number": "121000358",
//   "nickname": "Bank of America Checking"
// }

// RESPONSE
// {
//   "id": "c9b420e0-ae4e-4f39-bcbf-649b407c2129",
//   "account_id": "b9b19618-22dd-4e80-8432-fc9e1ba0b27d",
//   "created_at": "2021-05-17T09:54:58.114433723Z",
//   "updated_at": "2021-05-17T09:54:58.114433723Z",
//   "status": "QUEUED",
//   "account_owner_name": "Awesome Alpaca",
//   "bank_account_type": "CHECKING",
//   "bank_account_number": "32131231abc",
//   "bank_routing_number": "121000358",
//   "nickname": "Bank of America Checking"
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
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/accounts/${params.accountId}/ach_relationships`
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
  const url = `${process.env.NEXT_PUBLIC_ALPACA_URL}/v1/accounts/${params.accountId}/ach_relationships`
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
