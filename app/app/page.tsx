import Stats from '@app/(dashboard)/Stats'
import AccountBalance from '@app/(dashboard)/AccountBalance'
import AccountInformation from '@app/(dashboard)/AccountInformation'
import News from '@app/(dashboard)/News'

export default function Dashboard() {
  // will be retrieved at login
  const accountId = '0d178bce-9019-40c3-9841-29544381d812'

  return (
    <main className='w-full bg-lunarship-gray-200 text-white'>
      <div className='flex h-full w-full flex-col gap-8 p-4'>
        <Stats accountId={accountId} />
        <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2'>
          <AccountBalance accountId={accountId} />
          <AccountInformation accountId={accountId} />
          <News />
        </div>
      </div>
    </main>
  )
}
