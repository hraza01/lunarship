import BankList from '@app/account/(funding)/(relationships)/BankList'
import AchList from '@app/account/(funding)/(relationships)/AchList'

export default function Relationships() {
  return (
    <div className='space-y-10 divide-y divide-gray-900/10 bg-lunarship-gray-200 px-2 py-12'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3'>
        <div className='px-4 sm:px-0'>
          <h2 className='text-base font-semibold leading-7 text-white'>
            Banks
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-200'>
            Banking connections to your lunarship account
          </p>
        </div>

        <BankList />
      </div>

      {/*divider*/}
      <div className='relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-400/50' />
        </div>
      </div>

      <div className='grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3'>
        <div className='px-4 sm:px-0'>
          <h2 className='text-base font-semibold leading-7 text-white'>
            Automated Clearing House
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-200'>
            Authorized ACH relationships allow near real-time fund transfers
          </p>
        </div>

        <AchList />
      </div>
    </div>
  )
}
