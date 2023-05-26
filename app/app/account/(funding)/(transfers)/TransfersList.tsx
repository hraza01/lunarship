const transactions = [
  {
    id: 'May 21, 2023',
    timestamp: 'May 21, 2023',
    type: 'US Equity',
    relationship_name: 'ACH',
    direction: 'INCOMING',
    requested_amount: '$3,509.00',
    amount: '$3,509.00',
    status: 'COMPLETED',
  },
  {
    id: 'May 22, 2023',
    timestamp: 'May 22, 2023',
    type: 'US Equity',
    relationship_name: 'ACH',
    direction: 'INCOMING',
    requested_amount: '$3,509.00',
    amount: '$3,509.00',
    status: 'COMPLETED',
  },
  {
    id: 'May 23, 2023',
    timestamp: 'May 23, 2023',
    type: 'US Equity',
    relationship_name: 'ACH',
    direction: 'INCOMING',
    requested_amount: '$3,509.00',
    amount: '$3,509.00',
    status: 'COMPLETED',
  },
  {
    id: 'May 24, 2023',
    timestamp: 'May 24, 2023',
    type: 'US Equity',
    relationship_name: 'ACH',
    direction: 'INCOMING',
    requested_amount: '$3,509.00',
    amount: '$3,509.00',
    status: 'COMPLETED',
  },
  // More transactions...
]

export default function TransfersList() {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-white'>
            Fund Transfers
          </h1>
          <p className='mt-2 text-sm text-gray-300'>
            All fund transfers between lunarship and your bank accounts
          </p>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='inline-block min-w-full overflow-hidden rounded align-middle'>
            <table className='min-w-full'>
              <thead>
                <tr className='bg-gray-700 text-white'>
                  <th
                    scope='col'
                    className='whitespace-nowrap py-3.5 pl-4 text-left text-sm font-semibold'
                  >
                    Date
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold '
                  >
                    Type
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold '
                  >
                    Relationship Name
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold '
                  >
                    Direction
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold '
                  >
                    Requested Amount
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold '
                  >
                    Amount
                  </th>
                  <th
                    scope='col'
                    className='whitespace-nowrap px-2 py-3.5 pr-4 text-right text-sm font-semibold '
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-400/50 bg-white/5'>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className='whitespace-nowrap py-2 pl-4 pr-3 text-sm'>
                      {transaction.timestamp}
                    </td>
                    <td className='whitespace-nowrap px-2 py-2 text-sm font-medium '>
                      {transaction.type}
                    </td>
                    <td className='whitespace-nowrap px-2 py-2 text-sm '>
                      {transaction.relationship_name}
                    </td>
                    <td className='whitespace-nowrap px-2 py-2 text-sm'>
                      {transaction.direction}
                    </td>
                    <td className='whitespace-nowrap px-2 py-2 text-sm'>
                      {transaction.requested_amount}
                    </td>
                    <td className='whitespace-nowrap px-2 py-2 text-sm'>
                      {transaction.amount}
                    </td>
                    <td className='whitespace-nowrap px-2 py-2 pr-4 text-right text-sm'>
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
