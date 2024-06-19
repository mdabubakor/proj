"use client"
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, ShoppingBag } from 'lucide-react'
import { Navigation } from '@/constans/data'


const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  
 

  return (
 <div className=' w-full h-20 border-b-[1px] border-b-zinc-300 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl'>
  <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0 '>
    {/* Logo */}
    <Logo/>
    {/* Navbar */}
    <ul className='hidden md:flex items-center gap-9 text-sm uppercase font-semibold'>
      {
        Navigation.map((item)=>(
          <Link key={item?._id} href={item?.href} >
            <li className={`hover:text-black cursor-pointer duration-200 overflow-hidden relative group
            ${item?.href === pathname && "text-designColor"}`}>{item?.title}
            <span className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0
             transition-transform duration-500 ${item?.href === pathname && "translate-x-0 bg-designColor"}`}/></li>
          </Link>
        ))
        
      }
    </ul>
    {/* Icons */}
    <div className='flex  items-center gap-6'>
      <Link href={"/wishlist"} className='hover:text-black cursor-pointer duration-200 overflow-hidden relative group'>
      <Heart className='w-7 h-7'/>
      <span className='absolute top-0 -left-0 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center
      group-hover:bg-black font-semibold group-hover:text-white justify-center'>10  </span>
      </Link>
      <Link href={"/cart"} className='hover:text-black cursor-pointer duration-200 overflow-hidden relative group'>
      <ShoppingBag  className='w-7 h-7'/>
      <span className='absolute top-0 -left-0 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center
      group-hover:bg-black font-semibold group-hover:text-white justify-center'>6  </span>
      </Link>
      <button className='hover:text-black text-xs font-semibold duration-200 overflow-hidden uppercase relative group'>log in
      
      <span className='absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0
             transition-transform duration-500'/>
      </button>
    </div>
  </div>
 </div>
  )
}

export default Header
