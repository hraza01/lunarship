import { useState } from 'react'
import FundingNav from '@app/account/(funding)/FundingNav'
import Relationships from '@app/account/(funding)/(relationships)/Relationships'
import Transfers from '@app/account/(funding)/(transfers)/Transfers'

export default function Funding() {
  const [subPage, setSubPage] = useState('relationships')

  return (
    <>
      <FundingNav subPage={subPage} setSubPage={setSubPage} />
      {subPage === 'relationships' && <Relationships />}
      {subPage === 'transfers' && <Transfers />}
    </>
  )
}
