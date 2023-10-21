import { formatNumber } from '@/utils/helpers'
import { format, parseISO } from 'date-fns'

async function getAccountInformation(accountId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/accounts/${accountId}`
  )
  return res.json()
}
export default async function AccountInformation({ accountId }) {
  const accountInformation = await getAccountInformation(accountId)

  const keys = [
    'daytrade_count',
    'crypto_status',
    'account_number',
    'currency',
    'cash',
    'clearing_broker',
    'maintenance_margin',
  ]

  return (
    <div className='flex w-full flex-col gap-2'>
      <h3 className='font-bold'>Account Information</h3>
      <div className='align grid grid-cols-2 justify-items-stretch gap-8 rounded bg-white/5 p-4 text-gray-100 lg:h-[24rem]'>
        <div className='col-span-2 flex items-center justify-between rounded px-6 py-3 text-sm uppercase text-gray-300'>
          <p className='font-bold uppercase text-gray-100'>account status</p>
          <p className='font-bold text-indigo-500'>
            {accountInformation.status}
          </p>
        </div>
        {keys.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between rounded px-6 py-3 text-sm uppercase text-gray-300 hover:outline hover:outline-gray-400/50'
          >
            <p className='font-bold uppercase text-gray-100'>
              {item.replace('_', ' ')}
            </p>
            <p>
              {item !== 'cash'
                ? accountInformation[item]
                : formatNumber(accountInformation[item])}
            </p>
          </div>
        ))}
        <div className='flex items-center justify-between rounded px-6 py-3 text-sm uppercase text-gray-300'>
          <p className='font-bold uppercase text-gray-100'>member since</p>
          <p>
            {format(parseISO(accountInformation?.created_at), 'MMM dd, yyyy')}
          </p>
        </div>
      </div>
    </div>
  )
}
