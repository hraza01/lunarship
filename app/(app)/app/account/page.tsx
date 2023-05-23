'use client'
import { useState } from 'react'
import Overview from '@app/account/General'
import Settings from '@app/account/Settings'
import Funding from '@app/account/(funding)/Funding'

const tabs = [
  { name: 'Funding', href: '#' },
  { name: 'General', href: '#' },
  { name: 'Settings', href: '#' },
]

export default function Account() {
  const [page, setPage] = useState('funding')

  function tabClickHandler(e) {
    e.preventDefault()
    setPage(e.target.name.toLowerCase())
  }

  return (
    <main className='flex h-full w-full flex-col bg-lunarship-gray-200 text-white lg:flex-row'>
      <div className='w-full bg-lunarship-gray-200'>
        <div className='mx-auto p-6'>
          <div className='sm:hidden'>
            <label htmlFor='tabs' className='sr-only'>
              Select a tab
            </label>
            <select
              id='tabs'
              name='tabs'
              className='block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm'
              defaultValue={page}
              onChange={tabClickHandler}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className='hidden sm:block'>
            <nav className='flex'>
              <ul
                role='list'
                className='flex min-w-full flex-none gap-x-6 border-b border-white/10 py-4 text-sm font-semibold leading-6 text-gray-400'
              >
                {tabs.map((tab) => (
                  <li key={tab.name}>
                    <a
                      href={tab.href}
                      className={`px-8 py-4 
                        ${
                          tab.name.toLowerCase() === page
                            ? 'rounded-t border-b-2 border-indigo-400 bg-lunarship-gray-100 text-indigo-400'
                            : ''
                        }
                      `}
                      name={tab.name}
                      onClick={tabClickHandler}
                    >
                      {tab.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className='bg-lunarship-gray-200 p-6'>
          {page === 'funding' && <Funding />}
          {page === 'general' && <Overview />}
          {page === 'settings' && <Settings />}
        </div>
      </div>
    </main>
  )
}
