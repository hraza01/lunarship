import Chart from '@/app/(app)/app/trade/Chart'
import Quotes from '@/app/(app)/app/trade/Quotes'
import TransactionPanel from '@/app/(app)/app/trade/TransactionPanel'

export default function Trade() {
  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 lg:flex-row'>
      <div className='flex-grow justify-self-center lg:w-4/5'>
        <Chart TradeItem={'AAPL'} />
      </div>
      <div className='bg-lunarship-gray-300 p-4 lg:w-full lg:max-w-xs'>
        <div className='flex flex-col gap-4'>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>
              Key Stats
            </h4>
            <div className='flex h-32 items-center justify-center rounded bg-gray-300 text-white '>
              Key Stats
            </div>
          </div>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>
              Live Quotes
            </h4>
            <Quotes ticker={'AAPL'} />
          </div>
          <div>
            <h4 className='mb-2 text-xs font-semibold text-gray-400'>Orders</h4>
            <div className='flex w-full items-center justify-center rounded'>
              <TransactionPanel TradeItem={'AAPL'} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
