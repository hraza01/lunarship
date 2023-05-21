export default function TransfersForm() {
  return (
    <form className='px-4 sm:px-6 lg:px-8'>
      <div className='space-y-12'>
        <div className='border-b border-white/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-white'>
            New Transfer
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>
            Initiate a new fund transfer between lunarship your accounts.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-white'
              >
                Transfer Type
              </label>
              <div className='mt-2'>
                <select
                  id='transfer-type'
                  name='transfer-type'
                  autoComplete='transfer-type'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option>ACH</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='relationship'
                className='block text-sm font-medium leading-6 text-white'
              >
                Relationship
              </label>
              <div className='mt-2'>
                <select
                  id='relationship'
                  name='relationship'
                  autoComplete='relationship-name'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option>TD</option>
                  <option>RBC</option>
                  <option>CIBC</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='country'
                className='block text-sm font-medium leading-6 text-white'
              >
                Direction
              </label>
              <div className='mt-2'>
                <select
                  id='country'
                  name='country'
                  autoComplete='country-name'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option>Incoming</option>
                  <option>Outgoing</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='amount'
                className='block text-sm font-medium leading-6 text-white'
              >
                Amount
              </label>
              <div className='mt-2'>
                <input
                  id='amount'
                  name='amount'
                  type='number'
                  autoComplete='amount'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-white'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
        >
          Submit
        </button>
      </div>
    </form>
  )
}
