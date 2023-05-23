import TickerInformation from '@app/trade/(components)/TickerInformation'
import TransactionPanel from '@app/trade/(components)/TransactionPanel'
import MarketData from '@app/trade/(components)/MarketData'

export default function TradeSideBar({ ticker }) {
  return (
    <div className='grid grid-cols-1 gap-0.5 gap-2 bg-lunarship-gray-300 p-4 align-bottom lg:w-full lg:max-w-xs'>
      <div>
        <h4 className='mb-2 text-xs font-semibold text-gray-400'>
          Ticker Information
        </h4>
        <TickerInformation ticker={ticker} />
      </div>
      <MarketData ticker={ticker} />
      <div className='self-end'>
        <h4 className='mb-2 text-xs font-semibold text-gray-400'>Orders</h4>
        <div className='flex w-full items-center justify-center rounded'>
          <TransactionPanel ticker={ticker} />
        </div>
      </div>
    </div>
  )
}
