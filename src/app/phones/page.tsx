import Container from '@/Components/Container'
import Product from '@/Components/Product'

import { getphones } from '@/hlpes'
import React from 'react'

const page =async () => {
  const Products = await getphones()
  return (
    <Container>
      
        <div className='border-b-[1px] border-b-zinc-200 flex items-center justify-between'>
          <h1>Phones</h1>
          <p>Get the phone you want</p>
        </div>
      <p className='mt-4 text-zinc-500 font-semibold'>Showing all {Products.length} Result</p>
      <Product Products={Products}/>
    </Container>
  )
}

export default page
