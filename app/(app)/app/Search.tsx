'use client'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { getAssetLogo } from '@/utils/helpers'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const items = await getData()

export default function Search() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')

  const tickers = [
    'AAPL',
    'AMZN',
    'BTCUSD',
    'F',
    'GE',
    'META',
    'MSFT',
    'NFLX',
    'NVDA',
    'TSLA',
  ]

  useEffect(() => {
    async function getAssets() {
      const res = await fetch('/api/assets')
      const data = await res.json()
      const filteredData = data.filter((ticker) =>
        tickers.includes(ticker.symbol)
      )

      for (const ticker of filteredData) {
        ticker.url = await getAssetLogo(ticker.symbol)
      }

      setItems(filteredData)
    }
    getAssets()

    document.addEventListener('keypress', (e) => {
      e.key === '/' && setOpen(true)
    })

    return () => {
      document.removeEventListener('keypress', (e) => {
        e.key === '/' && setOpen(true)
      })
    }
  }, [])

  const filteredItems =
    query === ''
      ? []
      : items.filter((item) => {
          return (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.symbol.toLowerCase().includes(query.toLowerCase())
          )
        })

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog as='div' className='relative z-50' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/40 bg-opacity-100 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='mx-auto mt-16 max-w-md transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all md:max-w-2xl'>
              <Combobox
                onChange={(item) => {
                  setOpen(false)
                  router.push(`/app/trade?ticker=${item.symbol}`)
                }}
              >
                <div className='relative'>
                  <MagnifyingGlassIcon
                    className='pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <Combobox.Input
                    className='h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                    placeholder='Search...'
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {filteredItems.length > 0 && (
                  <Combobox.Options
                    static
                    className='max-h-96 scroll-py-3 overflow-y-auto p-3'
                  >
                    {filteredItems.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          classNames(
                            'flex cursor-default select-none items-center rounded-xl p-3',
                            active && 'bg-gray-100'
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <div className='flex h-7 w-7 items-center justify-center rounded-lg'>
                              <img
                                src={item.url}
                                className='w-full object-contain'
                                alt='company logo'
                              />
                            </div>
                            <div className='ml-4 flex-auto'>
                              <p
                                className={classNames(
                                  'text-sm font-medium',
                                  active ? 'text-gray-900' : 'text-gray-700'
                                )}
                              >
                                {item.symbol}
                              </p>
                              <p
                                className={classNames(
                                  'text-sm',
                                  active ? 'text-gray-700' : 'text-gray-500'
                                )}
                              >
                                {item.name}
                              </p>
                            </div>
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredItems.length === 0 && (
                  <div className='px-6 py-14 text-center text-sm sm:px-14'>
                    <ExclamationCircleIcon
                      type='outline'
                      name='exclamation-circle'
                      className='mx-auto h-6 w-6 text-gray-400'
                    />
                    <p className='mt-4 font-semibold text-gray-900'>
                      No results found
                    </p>
                    <p className='mt-2 text-gray-500'>
                      No components found for this search term. Please try
                      again.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
