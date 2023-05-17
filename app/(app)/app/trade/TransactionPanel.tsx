'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

// @ts-ignore
export default function TransactionPanel({ ticker }) {
  const [side, setSide] = useState('buy')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [orderType, setOrderType] = useState('')
  const [duration, setDuration] = useState('')

  const sides = ['buy', 'sell']

  function submitHandler(e) {
    console.log(side, ticker, price, quantity, orderType, duration)
    console.log(e)
  }

  return (
    <div className='w-full sm:px-0 lg:max-w-md'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20'>
          {sides.map((side) => (
            <Tab
              key={side}
              onClick={() => setSide(side)}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-1.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-gray-100 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {side}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-8'>
          <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            <div className='flex flex-col gap-2'>
              <label className='text-xs text-gray-400' htmlFor='orderType'>
                Order Type
              </label>
              <select
                required
                name='orderType'
                placeholder='Order Type'
                className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
              >
                <option hidden>Please select</option>
                <option value='Market'>Market</option>
                <option value='Limit'>Limit</option>
                <option value='Stop'>Stop</option>
                <option value='Stop LStop'>Fill</option>
                <option value='Bracket'>Bracket</option>
              </select>
            </div>

            <div className='flex gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-xs text-gray-400' htmlFor='quantity'>
                  Price
                </label>
                <input
                  required
                  className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                  placeholder='Price'
                  type='number'
                  name='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-xs text-gray-400' htmlFor='quantity'>
                  Quantity
                </label>
                <input
                  required
                  className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                  placeholder='Quantity'
                  type='number'
                  name='quantity'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-xs text-gray-400' htmlFor='duration'>
                Duration
              </label>
              <input
                required
                type='text'
                name='duration'
                id='duration'
                className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
              />
            </div>
            <div className='mt-4 flex w-full justify-between gap-4'>
              <button type='reset' className='btn-alternate'>
                Cancel
              </button>
              <button type='submit' className='btn-primary'>
                Send Order
              </button>
            </div>
          </form>
          <div></div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
