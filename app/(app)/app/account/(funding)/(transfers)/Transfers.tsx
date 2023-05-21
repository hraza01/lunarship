import TransfersList from '@/app/(app)/app/account/(funding)/(transfers)/TransfersList'
import TransfersForm from '@/app/(app)/app/account/(funding)/(transfers)/TransfersForm'

export default function Transfers() {
  return (
    <div className='space-y-10 divide-y divide-gray-900/10 bg-lunarship-gray-200 px-2 py-12'>
      <TransfersForm />

      {/*divider*/}
      <div className='relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-400/50' />
        </div>
      </div>

      <TransfersList />
    </div>
  )
}
