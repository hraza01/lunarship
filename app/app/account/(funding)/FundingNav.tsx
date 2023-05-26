const tabs = [
  { name: 'Relationships', href: '#' },
  { name: 'Transfers', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FundingNav({ subPage, setSubPage }) {
  function tabClickHandler(e) {
    e.preventDefault()
    setSubPage(e.target.name.toLowerCase())
  }

  return (
    <div>
      <div className='sm:block'>
        <nav
          className='isolate flex divide-x divide-gray-200 rounded-lg shadow'
          aria-label='Tabs'
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              name={tab.name}
              onClick={tabClickHandler}
              className={classNames(
                tab.name.toLowerCase() === subPage
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
            >
              <span className='font-medium'>{tab.name}</span>
              <span
                aria-hidden='true'
                className={classNames(
                  tab.name.toLowerCase() === subPage
                    ? 'bg-indigo-500'
                    : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
