'use client'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '/app', icon: HomeIcon },
  {
    name: 'Portfolio',
    href: '/app/portfolio',
    icon: FolderIcon,
  },
  { name: 'Trade', href: '/app/trade', icon: UsersIcon },
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
  },
  { name: 'Reports', href: '/app/reports', icon: ChartPieIcon },
]

const userNavigation = [
  { name: 'Your Account', href: '/app/account' },
  { name: 'Sign Out', href: '#' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileNav() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className='sticky left-0 top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200/20 bg-lunarship-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden lg:px-8'>
        <button
          type='button'
          className='-m-2.5 p-2.5 text-gray-400 hover:text-white lg:hidden'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only'>Open sidebar</span>
          <Bars3Icon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
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
                          {navigation.map((item) => {
                            const isActive = pathname === item.href

                            return (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    isActive
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
                            )
                          })}
                        </ul>
                      </li>
                      <li className='mt-auto'>
                        <Menu as='div' className='relative'>
                          <Menu.Button className='-m-1.5 flex w-full items-center p-1.5 text-gray-400 hover:text-white'>
                            <span className='sr-only'>Open user menu</span>
                            <img
                              className='h-8 w-8 rounded-full bg-gray-50'
                              src='https://gitlab.com/uploads/-/system/user/avatar/11546379/avatar.png'
                              alt=''
                            />
                            <span className='flex w-full items-center justify-between text-gray-400 hover:text-white'>
                              <span
                                className='ml-4 text-sm font-semibold leading-6'
                                aria-hidden='true'
                              >
                                Hasan Raza
                              </span>
                              <EllipsisHorizontalIcon
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
                            <Menu.Items className='absolute bottom-12 right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
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
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
