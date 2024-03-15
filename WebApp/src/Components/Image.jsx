import React from 'react'
import img1 from "../assets/dest-01.webp"

const Image = () => {
          
  return (
    <div style={`background-image: url(${img1});`} className='w-72 h-[60%] bg-zinc-600 absolute rounded-lg overflow-hidden' ></div>
  )
}

export default Image