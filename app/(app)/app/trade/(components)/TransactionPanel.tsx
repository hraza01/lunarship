'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Notification from '@/app/(app)/app/trade/(components)/Notification'

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
  const [show, setShow] = useState(false)

  const sides = ['buy', 'sell']

  async function submitHandler(e) {
    e.preventDefault()

    const payload = {
      symbol: ticker,
      price: parseFloat(price).toFixed(2),
      qty: Math.round(quantity),
      side: side,
      type: orderType,
      time_in_force: duration,
    }

    const accountId = sessionStorage.getItem('accountId')
    const url = `/api/trading/${accountId}`
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    }

    orderType.toLowerCase() === 'market' && delete payload['price']

    const res = await fetch(url, options)
    const data = await res.json()

    setShow(true)

    setInterval(function () {
      setShow(false)
    }, 5000)
  }

  return (
    <div className='w-full sm:px-0 lg:max-w-md'>
      <Notification
        show={show}
        title={'Success'}
        detail={'Order has been sent to the market'}
        setShow={setShow}
      />
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
        <Tab.Panels className='mt-4'>
          <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            <div className='flex flex-col gap-2'>
              <label className='text-xs text-gray-400' htmlFor='orderType'>
                Order Type
              </label>
              <select
                required
                name='orderType'
                className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
              >
                <option value='' disabled>
                  Please select
                </option>
                <option value='market'>Market</option>
                <option value='limit'>Limit</option>
                <option value='stop'>Stop</option>
                <option value='stop_limit'>Stop Limit</option>
                <option value='trailing_stop'>Trailing Stop</option>
              </select>
            </div>

            <div className='flex w-full gap-4'>
              {orderType.toLowerCase() !== 'market' && (
                <div className='flex w-full flex-col gap-2'>
                  <label className='text-xs text-gray-400' htmlFor='price'>
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
              )}

              <div className='flex w-full flex-col gap-2'>
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
              <select
                required
                name='duration'
                placeholder='duration'
                className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value='' disabled>
                  Please select
                </option>
                <option value='gtc'>Good Until Cancelled</option>
                <option value='day'>Day</option>
                <option value='opg'>At Market Open</option>
                <option value='ioc'>Immediate or Cancel</option>
                <option value='fok'>Fill or Kill</option>
              </select>
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
