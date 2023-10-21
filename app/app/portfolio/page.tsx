import AccountBalance from '@app/(dashboard)/AccountBalance'
import { formatNumber } from '@/utils/helpers'

async function getPositions(accountId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/accounts/${accountId}/positions`
  )

  return res.json()
}
export default async function Portfolio() {
  const accountId = '0d178bce-9019-40c3-9841-29544381d812'

  const positions = await getPositions(accountId)

  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
      <div className='w-full p-4 py-6'>
        <AccountBalance accountId={accountId} />
        <div className='grid grid-cols-2 grid-rows-2 gap-4 gap-y-8'>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Current Positions</h3>
            <div className='flex h-96 items-center justify-center rounded border border-gray-400'>
              {positions.map((pos) => (
                <div key={pos.asset_id} className='flex gap-2'>
                  <p>{pos.symbol}</p>
                  <p>{pos.qty}</p>
                  <p>{pos.side}</p>
                  <p>{formatNumber(pos.avg_entry_price)}</p>
                  <p>{formatNumber(pos.market_value)}</p>
                  <p>{formatNumber(pos.cost_basis)}</p>
                  <p>{formatNumber(pos.unrealized_pl)}</p>
                  <p>{(pos.unrealized_plpc * 100).toFixed(2)}%</p>
                  <p>{formatNumber(pos.current_price)}</p>
                  <p>{(pos.change_today * 100).toFixed(2)}%</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Orders</h3>
            <div className='flex h-96 items-center justify-center rounded border border-gray-400'>
              Orders List
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
