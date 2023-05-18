'use client'
import { useEffect, useState } from 'react'
import { parseISO, fromUnixTime, format } from 'date-fns'
import { formatNumber } from '@/utils/helpers'
import Stats from '@/app/(app)/app/Stats'
import Chart from '@/app/(app)/app/Chart'
import Link from 'next/link'
import { Spinner } from 'flowbite-react'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [accountBalance, setAccountBalance] = useState([])
  const [accountDetails, setAccountDetails] = useState({})
  const [news, setNews] = useState([])
  const [stats, setStats] = useState([])

  const accountStatsKeys = [
    'equity',
    'buying_power',
    'pending_transfer_out',
    'pending_transfer_in',
  ]

  const accountInformationKeys = [
    'daytrade_count',
    'crypto_status',
    'account_number',
    'currency',
    'cash',
    'clearing_broker',
    'maintenance_margin',
  ]

  sessionStorage.setItem('accountId', '0d178bce-9019-40c3-9841-29544381d812')
  const accountId = sessionStorage.getItem('accountId')

  useEffect(() => {
    async function getAccountBalance() {
      const res = await fetch(`/api/account/${accountId}/portfolio`)
      const data = await res.json()

      setAccountBalance(
        data.timestamp.map((day, index) => {
          return {
            time: format(fromUnixTime(day), 'yyyy-MM-dd'),
            value: Number(data.equity[index]),
          }
        })
      )
    }
    async function getAccountDetails() {
      const res = await fetch(`/api/account/${accountId}`)
      const data = await res.json()

      setAccountDetails(data)
      setStats(
        // @ts-ignore
        accountStatsKeys.map((key) => {
          return {
            name: key,
            value: formatNumber(data[key]),
          }
        })
      )
    }

    async function getNews() {
      const res = await fetch('/api/news')
      const data = await res.json()
      setNews(data.news)
    }

    const allPromise = Promise.all([
      getAccountDetails(),
      getAccountBalance(),
      getNews(),
    ])

    allPromise.then(() => {
      setLoading(false)
    })
  }, [accountId])

  if (loading) {
    return (
      <main className='flex h-full w-full text-white lg:flex-row'>
        <div className='inset-0 flex w-full items-center justify-center rounded border border-gray-400 p-4'>
          <Spinner color='purple' aria-label='Purple spinner example' />
        </div>
      </main>
    )
  }

  return (
    <main className='w-full bg-lunarship-gray-200 text-white'>
      <div className='flex h-full w-full flex-col gap-8 p-4'>
        <Stats stats={stats} />
        <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2'>
          <div className='flex h-[24rem] w-full flex-col gap-2'>
            <h3 className='font-bold'>Account Balance</h3>
            <Chart data={accountBalance}></Chart>
          </div>
          <div className='flex h-[24rem] w-full flex-col gap-2'>
            <h3 className='font-bold'>Account Information</h3>
            <div className='align grid grid-cols-2 justify-items-stretch gap-8 rounded bg-white/5 p-4 text-gray-100'>
              <div className='col-span-2 flex items-center justify-between rounded px-6 py-3 text-sm uppercase text-gray-300'>
                <p className='font-bold uppercase text-gray-100'>status</p>
                <p className='text-indigo-500'>{accountDetails.status}</p>
              </div>
              {accountInformationKeys.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between rounded px-6 py-3 text-sm uppercase text-gray-300 hover:outline hover:outline-indigo-500'
                >
                  <p className='font-bold uppercase text-gray-100'>
                    {item.replace('_', ' ')}
                  </p>
                  <p>
                    {item !== 'cash'
                      ? accountDetails[item]
                      : formatNumber(accountDetails[item])}
                  </p>
                </div>
              ))}
              <div className='flex items-center justify-between rounded px-6 py-3 text-sm uppercase text-gray-300'>
                <p className='font-bold uppercase text-gray-100'>
                  member since
                </p>
                <p>
                  {format(parseISO(accountDetails?.created_at), 'MMM dd, yyyy')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 flex w-full flex-col gap-2'>
          <h3 className='font-bold'>Financial News</h3>
          <div className='pb-8 text-white'>
            <div className='grid grid-cols-7 items-center gap-4 rounded-t border-b border-gray-400 bg-white/5 px-10 py-2.5 text-base uppercase text-gray-300'>
              <p className='font-bold uppercase text-gray-100'>source</p>
              <p className='font-bold uppercase text-gray-100'>author</p>
              <p className='col-span-2 font-bold uppercase text-gray-100'>
                headline
              </p>
              <p className='font-bold uppercase text-gray-100'>published</p>
              <p className='font-bold uppercase text-gray-100'>updated</p>
              <p className='font-bold uppercase text-gray-100'>tags</p>
            </div>
            <div className='max-h-[32rem] overflow-y-scroll rounded-b'>
              {news.map((article) => (
                <div
                  key={article.id}
                  className='grid grid-cols-7 items-center gap-4 bg-white/5 px-10 py-2'
                >
                  <p className='uppercase'>{article.source}</p>
                  <p>{article.author}</p>
                  <Link
                    className='col-span-2 text-indigo-400'
                    href={article.url}
                    target='_blank'
                  >
                    {article.headline}
                  </Link>
                  <p>{format(parseISO(article.created_at), 'MMM dd, yyyy')}</p>
                  <p>{format(parseISO(article.updated_at), 'MMM dd, yyyy')}</p>
                  <div className='flex flex-wrap gap-2'>
                    {article.symbols.map((symbol, index) => (
                      <p key={index}>{symbol}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
