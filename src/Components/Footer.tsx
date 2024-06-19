import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { Navigation } from '@/constans/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black py-10 text-zinc-500'>
      <Container className='flex items-center justify-between'>
        <Logo className="text-white" spanclassName="bg-white text-black"/>
    
        <ul className='flex gap-6 items-center justify-center'>
            {
                Navigation.map((item)=>(
                    <Link href={item?.href} key={item?._id}>
                    <li className='hover:text-white font-semibold duration-200'> {item?.title}</li>
                    </Link>
                ))
            }
        </ul>
        <p className='text-right'>Join me with ABS.com</p>
      </Container>
    </div>
  )
}

export default Footer
