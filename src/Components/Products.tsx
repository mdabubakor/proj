
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { PcCase,ScanFace, Smartphone, Watch } from 'lucide-react'
import Product from './Product'
import { getProducts } from '@/hlpes'



const Products = async () => {
  const Products = await getProducts();
  
  
  return (
    <div className='mt-10 mb-60'>
      <Container>
       <div className='flex flex-col items-center'>
       <h1 className='text-3xl font-semibold'>Choose a category</h1>
        <p className='text-lg text-center'>Explore dozens customized layout made by our brilliant designers.</p>
        <div className='text-zinc-500 flex items-center gap-2 md:gap-6 mt-5'>
          <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
          <Smartphone/>
          <p>Phone</p>
          </Link>
          <div className='h-7 w-[1px] bg-designColor'/>
          <Link href={'/phonecases'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
          <PcCase/>
          <p>Phone Case</p>
          </Link>
          <div className='h-7 w-[1px] bg-designColor'/>
          <Link href={'/whtaches'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
          <Watch/>
          <p>Watches</p>
          </Link>
          <div className='h-7 w-[1px] bg-designColor'/>
          <Link href={'/accessories'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
          <ScanFace/>
          <p>Accessories</p>
          </Link>
          
        </div>
       </div>
       <Product Products ={Products}/>
      </Container>
    </div>
  )
}

export default Products
