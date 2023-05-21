import { useState } from 'react'
import FundingNav from '@/app/(app)/app/account/(funding)/FundingNav'
import Relationships from '@/app/(app)/app/account/(funding)/(relationships)/Relationships'
import Transfers from '@/app/(app)/app/account/(funding)/(transfers)/Transfers'

export default function Funding() {
  const [subPage, setSubPage] = useState('transfers')

  return (
    <>
      <FundingNav subPage={subPage} setSubPage={setSubPage} />
      {subPage === 'relationships' && <Relationships />}
      {subPage === 'transfers' && <Transfers />}
    </>
  )
}
