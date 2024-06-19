
 
"use client"
import Link from "next/link";
import { ProductType } from "../../Type";
import Image from "next/image";
import { Heart } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
interface Item {
  Products: ProductType[];
}


const Product = ({Products}:Item) => {
 
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {
        Products.map((item)=>(
        <div key={item?._id} className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden">
            <Link  href={{pathname:`/${item?._id}`,query: {_id: item?._id}}}>
              
            <Image src={item?.image} alt="image" width={500} height={500} 
             className="w-full h-80 object-contain lg:object-cover group-hover:scale-110 duration-300"
             />
            </Link>
            <Heart fill="black" className="absolute top-4 right-4 text-zinc-500  w-5 h-5 hover:text-black duration-200 cursor-pointer"/>
            <div className="p-4 bg-zinc-100 group-hover:bg-zinc-800 group-hover:shadow-xl duration-200">
              <p className="group-hover:text-designColor">{item?.title}</p>
              <p className="group-hover:text-designColor font-semibold"><FormattedPrice amount={item?.price}/></p>
              <div className="flex items-center justify-between mt-2 r">
                <button className="uppercase font-semibold hover:text-white text-designColor duration-200">Add To Card</button>
                <Link className="uppercase font-semibold hover:text-designColor text-zinc-500 duration-200" href={{pathname:`/${item?._id}`,query: {_id: item?._id}}}>More Info</Link>
              </div>
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default Product
