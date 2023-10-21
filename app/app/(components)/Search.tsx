'use client'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Search({ items }: any) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    function onKeyDown(e: any) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        setOpen(!open)
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (query && query !== '') {
      // @ts-ignore
      async function getAssets() {
        // @ts-ignore
        const filteredItem = await items.filter(
          (item: any) => item.symbol.toLowerCase() === query.toLowerCase()
        )

        const filteredItems = await items
          .filter((item: any) => {
            return (
              item.symbol.toLowerCase() !== query.toLowerCase() &&
              (item.symbol.toLowerCase().includes(query.toLowerCase()) ||
                item.name.toLowerCase().includes(query.toLowerCase()))
            )
          })
          .slice(0, 10)

        // @ts-ignore
        setFilteredItems([...filteredItem, ...filteredItems])
      }

      getAssets()
    }
  }, [items, query])

  const handleSearchQuery = (e: any) => {
    e.target.value.length >= 1 && setQuery(e.target.value)
  }

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
          enter='ease-out duration-200'
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
            enter='ease-out duration-200'
            enterFrom='opacity-0 scale-0'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-0'
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
                    placeholder='Search a symbol...'
                    onChange={handleSearchQuery}
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
                            'cursor-default select-none items-center rounded-xl p-3',
                            active && 'bg-gray-100'
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <p
                              className={classNames(
                                'p-1 text-sm font-medium',
                                active ? 'text-gray-900' : 'text-gray-700'
                              )}
                            >
                              {item.symbol}
                            </p>
                            <div className='flex gap-2'>
                              <p
                                className={classNames(
                                  'p-1 text-sm',
                                  active ? 'text-gray-700' : 'text-gray-500'
                                )}
                              >
                                {item.name.length > 40
                                  ? `${item.name.slice(0, 60)} ...`
                                  : item.name}
                              </p>
                              <p
                                className={classNames(
                                  'ml-auto rounded bg-gray-200 px-2 py-1 text-sm uppercase',
                                  active ? 'text-gray-700' : 'text-gray-500'
                                )}
                              >
                                {item.exchange}
                              </p>
                              <p
                                className={classNames(
                                  'rounded bg-gray-200 px-2 py-1 text-sm uppercase',
                                  active ? 'text-gray-700' : 'text-gray-500'
                                )}
                              >
                                {item.class.replace('_', ' ')}
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
