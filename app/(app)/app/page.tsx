'use client'
import ChartComponent from '@/app/(app)/app/ChartComponent'
import { useEffect, useState } from 'react'
import { fromUnixTime, format } from 'date-fns'
export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [accountBalance, setAccountBalance] = useState([])
  const [accountValue, setAccountValue] = useState('')

  sessionStorage.setItem('accountId', '0d178bce-9019-40c3-9841-29544381d812')
  const accountId = sessionStorage.getItem('accountId')

  useEffect(() => {
    async function getAccountBalance() {
      const res = await fetch(`/api/dashboard/${accountId}`)
      const data = await res.json()

      setAccountValue(data.base_value)
      setAccountBalance(
        data.timestamp.map((day, index) => {
          return {
            time: format(fromUnixTime(day), 'yyyy-MM-dd'),
            value: Number(data.equity[index]),
          }
        })
      )
      setLoading(false)
    }

    getAccountBalance()
  }, [accountId])

  if (loading) {
    return (
      <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
        <div className='flex w-full flex-col gap-4 p-4'>
          <div className='flex h-[50rem] w-full items-center justify-center rounded border border-gray-400'>
            Spinner
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
      <div className='w-full p-4'>
        <div className='mb-8 flex w-full justify-between gap-8 rounded'>
          <div className='flex min-w-fit flex-col items-start justify-center gap-1.5 rounded px-2'>
            <p className='text-sm font-bold text-indigo-400'>Total Equity</p>
            <p className='text-3xl'>${accountValue}</p>
          </div>
          <div className='rounded border border-gray-400 p-10'>
            Account Metric 2
          </div>
          <div className='rounded border border-gray-400 p-10'>
            Account Metric 3
          </div>
          <div className='rounded border border-gray-400 p-10'>
            Account Metric 4
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Account Balance</h3>
            <ChartComponent data={accountBalance}></ChartComponent>
          </div>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Account Information</h3>
            <div className='flex h-80 items-center justify-center rounded border border-gray-400'>
              Account Details
            </div>
          </div>
          <div className='col-span-2 flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Financial News</h3>
            <div className='flex h-80 items-center justify-center rounded border border-gray-400'>
              News Items
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
