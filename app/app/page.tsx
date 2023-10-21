import Stats from '@app/(dashboard)/Stats'
import AccountBalance from '@app/(dashboard)/AccountBalance'
import AccountInformation from '@app/(dashboard)/AccountInformation'
import News from '@app/(dashboard)/News'
import Search from '@app/(components)/Search'

async function getAssets() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/assets`)
  const data = await res.json()

  return data.map((item: any) => {
    return {
      id: item.id,
      symbol: item.symbol,
      name: item.name,
      class: item.class,
      exchange: item.exchange,
    }
  })
}

export default async function Dashboard() {
  // will be retrieved at login
  const accountId = '0d178bce-9019-40c3-9841-29544381d812'
  const assets = await getAssets()

  return (
    <>
      <Search items={assets} />
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
    </>
  )
}
