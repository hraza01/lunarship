'use client'
import { Fragment, useState, useEffect } from 'react'
import Search from '@/app/(app)/app/Search'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '/app', icon: HomeIcon, current: true },
  {
    name: 'Portfolio',
    href: '/app/portfolio',
    icon: FolderIcon,
    current: false,
  },
  { name: 'Trade', href: '/app/trade', icon: UsersIcon, current: false },
  {
    name: 'Trade History',
    href: '/app/trade-history',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: 'Documents',
    href: '/app/documents',
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: 'Reports', href: '/app/reports', icon: ChartPieIcon, current: false },
]

const teams = [
  { id: 1, name: 'Stocks', href: '#', initial: 'S', current: false },
  {
    id: 2,
    name: 'Crypto Currencies',
    href: '#',
    initial: 'C',
    current: false,
  },
]

const userNavigation = [
  { name: 'Your Account', href: '/app/account' },
  { name: 'Sign Out', href: '#' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navItems, setNavItems] = useState(navigation)
  const [searching, setSearching] = useState(false)

  const navClickHandler = (e: any) => {
    navItems.forEach((item) => {
      item.current = false
    })
    setNavItems((prevState: any) => {
      return prevState.forEach((item: any) =>
        item.name === e.target.text
          ? (item.current = true)
          : (item.current = false)
      )
    })
  }

  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      e.key === '/' && setSearching(true)
    })

    return () => {
      document.removeEventListener('keypress', (e) => {
        e.key === '/' && setSearching(true)
      })
    }
  }, [])

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50 lg:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-900/80' />
          </Transition.Child>

          <div className='fixed inset-0 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                    <button
                      type='button'
                      className='-m-2.5 p-2.5'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10'>
                  <div className='flex h-16 shrink-0 items-center'>
                    <img
                      className='h-8 w-auto'
                      src='/spaceship.png'
                      alt='lunarship'
                    />
                  </div>
                  <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                      <li>
                        <ul role='list' className='-mx-2 space-y-1'>
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-slate-800 text-white'
                                    : 'text-gray-400 hover:bg-slate-800 hover:text-white',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                )}
                              >
                                <item.icon
                                  className='h-6 w-6 shrink-0'
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className='text-xs font-semibold leading-6 text-gray-400'>
                          Recent
                        </div>
                        <ul role='list' className='-mx-2 mt-2 space-y-1'>
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? 'bg-slate-800 text-white'
                                    : 'text-gray-400 hover:bg-slate-800 hover:text-white',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                )}
                              >
                                <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-slate-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                                  {team.initial}
                                </span>
                                <span className='truncate'>{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className='mt-auto'>
                        <a
                          href='#'
                          className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-slate-800 hover:text-white'
                        >
                          <Cog6ToothIcon
                            className='h-6 w-6 shrink-0'
                            aria-hidden='true'
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-lunarship-gray-300 px-6 pb-4'>
          <div className='flex h-16 shrink-0 items-center'>
            <img className='h-8 w-auto' src='/spaceship.png' alt='lunarship' />
          </div>
          <nav className='flex flex-1 flex-col'>
            <div className='mb-2 text-xs font-semibold leading-6 text-gray-400'>
              Navigation
            </div>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={navClickHandler}
                        className={classNames(
                          item.current
                            ? 'bg-slate-800 text-white'
                            : 'text-gray-400 hover:bg-slate-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                      >
                        <item.icon
                          className='h-6 w-6 shrink-0'
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className='mb-2 text-xs font-semibold leading-6 text-gray-400'>
                  Recent
                </div>
                <ul role='list' className='-mx-2 mt-2 space-y-1'>
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-slate-800 text-white'
                            : 'text-gray-400 hover:bg-slate-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                      >
                        <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-slate-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                          {team.initial}
                        </span>
                        <span className='truncate'>{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='mt-auto'>
                <a
                  href='#'
                  className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-slate-800 hover:text-white'
                >
                  <Cog6ToothIcon
                    className='h-6 w-6 shrink-0'
                    aria-hidden='true'
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='lg:pl-72'>
        <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200/20 bg-lunarship-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-400 hover:text-white lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Separator */}
          <div
            className='h-6 w-px bg-gray-900/10 lg:hidden'
            aria-hidden='true'
          />

          <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
            <Search open={searching} setOpen={setSearching} />
            <form
              className={`${
                searching ? 'invisible' : ''
              } relative flex flex-1 text-gray-400 hover:text-white active:text-white`}
            >
              <label htmlFor='search-field' className='sr-only'>
                Search
              </label>
              <MagnifyingGlassIcon
                className='pointer-events-none absolute inset-y-0 left-0 h-full w-5'
                aria-hidden='true'
              />
              <input
                id='search-field'
                className='block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm'
                placeholder='Search...'
                type='search'
                name='search'
                onClick={() => setSearching(true)}
                onKeyPressCapture={() => setSearching(true)}
              />
              <div className='mr-6 flex items-center justify-center lg:mr-8'>
                <kbd className='inline-flex items-center rounded border border-gray-100/40 px-3.5 py-2 font-sans text-xs text-gray-400'>
                  /
                </kbd>
              </div>
            </form>
            <div className='flex items-center gap-x-4 lg:gap-x-6'>
              <button
                type='button'
                className='-m-2.5 p-2.5 text-gray-400 hover:text-white'
              >
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Separator */}
              <div
                className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-100/40'
                aria-hidden='true'
              />

              {/* Profile dropdown */}
              <Menu as='div' className='relative'>
                <Menu.Button className='-m-1.5 flex items-center p-1.5 text-gray-400 hover:text-white'>
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full bg-gray-50'
                    src='https://gitlab.com/uploads/-/system/user/avatar/11546379/avatar.png'
                    alt=''
                  />
                  <span className='hidden text-gray-400 hover:text-white lg:flex lg:items-center'>
                    <span
                      className='ml-4 text-sm font-semibold leading-6'
                      aria-hidden='true'
                    >
                      Hasan Raza
                    </span>
                    <ChevronDownIcon
                      className='ml-2 h-5 w-5'
                      aria-hidden='true'
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
