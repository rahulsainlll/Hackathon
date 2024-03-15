import React from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='w-full h-fit flex px-10 py-6 items-center justify-between z-10 absolute top-0 left-0 '>
               <div className='w-10 h-10 rounded-full flex items-center hover justify-center bg-zinc-100'>
                              <IoMdMenu className='mix-blend-difference text-xl' />
               </div>

               <button className='px-3 py-2 rounded-[30px] bg-zinc-100 text-black hover text-lg'>Get in touch</button>
    </div>
    
  )
}

export default Navbar