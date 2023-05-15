export default function Portfolio() {
  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
      <div className='w-full p-4 py-6'>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 gap-y-8'>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Portfolio Value</h3>
            <div className='flex h-96 items-center justify-center rounded border border-gray-400'>
              Chart
            </div>
          </div>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Asset Category By Funding</h3>
            <div className='flex h-96 items-center justify-center rounded border border-gray-400'>
              Chart
            </div>
          </div>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Current Positions</h3>
            <div className='flex h-96 items-center justify-center rounded border border-gray-400'>
              Positions Table
            </div>
          </div>
          <div className='flex w-full flex-col gap-2'>
            <h3 className='font-bold'>Recent Transactions</h3>
            <div className='flex h-96 items-center justify-center rounded border border-gray-400'>
              Transactions List
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
