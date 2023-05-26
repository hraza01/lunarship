// More people...

export default function BankList() {
  const people = [
    {
      name: 'TD',
      title: '123456789abc432542',
      email: '1234567892345234',
      role: 'ABA',
    },
    {
      name: 'RBC',
      title: '123456789abc32452435',
      email: '1234567897657',
      role: 'ABA',
    },
    {
      name: 'CIBC',
      title: '123456789abc12561',
      email: '12345678912312',
      role: 'ABA',
    },
  ]
  return (
    <div className='rounded bg-lunarship-gray-100 p-4 text-white sm:px-6 md:col-span-2 lg:px-8'>
      <div className='justify-end sm:flex sm:items-center'>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Add Bank
          </button>
        </div>
      </div>
      <div className='-mx-4 mt-8 sm:-mx-0'>
        <table className='min-w-full divide-y divide-gray-300'>
          <thead>
            <tr>
              <th
                scope='col'
                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0'
              >
                Name
              </th>
              <th
                scope='col'
                className='hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell'
              >
                Account Number
              </th>
              <th
                scope='col'
                className='hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell'
              >
                Bank Code
              </th>
              <th
                scope='col'
                className='px-3 py-3.5 text-left text-sm font-semibold'
              >
                Status
              </th>
              <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {people.map((person) => (
              <tr key={person.email}>
                <td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium sm:w-auto sm:max-w-none sm:pl-0'>
                  {person.name}
                  <dl className='font-normal lg:hidden'>
                    <dt className='sr-only'>Title</dt>
                    <dd className='mt-1 truncate text-gray-700'>
                      {person.title}
                    </dd>
                    <dt className='sr-only sm:hidden'>Email</dt>
                    <dd className='mt-1 truncate text-gray-500 sm:hidden'>
                      {person.email}
                    </dd>
                  </dl>
                </td>
                <td className='hidden px-3 py-4 text-sm lg:table-cell'>
                  {person.title}
                </td>
                <td className='hidden px-3 py-4 text-sm sm:table-cell'>
                  {person.email}
                </td>
                <td className='px-3 py-4 text-sm'>{person.role}</td>
                <td className='py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                  <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                    Edit<span className='sr-only'>, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
