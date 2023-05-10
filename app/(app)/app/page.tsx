export default function App() {
  return (
    <main className='flex h-full w-full flex-col lg:flex-row'>
      <div className='flex-1 flex-grow justify-self-center p-4 lg:w-4/5'>
        <div className='h-96 rounded border border-gray-200/20 p-4 text-gray-100 lg:h-[40rem]'>
          Chart
        </div>
      </div>
      <div className='h-full bg-gray-900 p-4 lg:w-full lg:max-w-xs'>
        <div className='h-full rounded border border-gray-200/20 p-4 text-gray-100'>
          Trade I/O
        </div>
      </div>
    </main>
  )
}
