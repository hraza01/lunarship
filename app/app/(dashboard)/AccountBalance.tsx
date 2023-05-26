import { format, fromUnixTime } from 'date-fns'
import Chart from '@app/(dashboard)/Chart'

// @ts-ignore

async function getAccountBalance(accountId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/account/${accountId}/portfolio`
  )

  const data = await res.json()

  return data.timestamp.map((day, index) => {
    return {
      time: format(fromUnixTime(day), 'yyyy-MM-dd'),
      value: Number(data.equity[index]),
    }
  })
}

export default async function AccountBalance({ accountId }) {
  const data = await getAccountBalance(accountId)

  return (
    <div className='flex w-full flex-col gap-2'>
      <h3 className='font-bold'>Account Balance</h3>
      <div className='h-[24rem] w-full grow rounded bg-white/5 p-4'>
        <Chart data={data} />
      </div>
    </div>
  )
}
