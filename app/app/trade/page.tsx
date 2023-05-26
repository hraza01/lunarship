import Chart from '@app/trade/Chart'
import TradeSideBar from '@app/trade/TradeSideBar'

export default function Trade({ searchParams }) {
  const ticker = searchParams.ticker || 'AAPL'

  return (
    <main className='flex h-full w-full flex-col justify-between lg:flex-row'>
      <div className='min-h-[50dvh] flex-grow lg:h-full lg:min-h-full lg:w-4/5'>
        <Chart ticker={ticker} />
      </div>
      <TradeSideBar ticker={ticker} />
    </main>
  )
}
