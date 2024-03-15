import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { motion } from 'framer-motion'
const Drag = ({ref,data}) => {
  return (
    <motion.div drag dragConstraints={ref} whileDrag={{scale:"1.05"}} dragElastic={0.5} transition={{duration:0.5}} className='w-52 h-64 rounded-[34px]  bg-zinc-100/30 relative shadow-md shadow-black-400 z-10'>
              


               <div className='absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden rounded-[34px]'>
                              <div className='flex items-center justify-between h-full '>
                                             <img className='w-full h-full object-cover pointer-events-none' src={data.url} alt="not showing" />
                                             
                              </div>
                              
               </div>

               <div className='w-fit h-6 px-3 pt-1 rounded-xl absolute -bottom-8 left-2 bg-inherit z-40'>
                              <h1 className='text-xs'>{data.text}</h1>
               </div>
               
    </motion.div>

  )
}

export default Drag