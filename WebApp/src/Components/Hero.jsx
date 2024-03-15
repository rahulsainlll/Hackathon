import React, { useRef } from 'react'
import Navbar from './Navbar'
import { FaArrowTurnDown, FaHeartCircleCheck } from "react-icons/fa6";
import img1 from '../assets/dest-01.webp'
import img2 from '../assets/dest-02.webp'
import img3 from '../assets/dest-03.webp'
import img4 from '../assets/dest-04.webp'
import Drag from './Drag';
import { motion, useAnimation } from 'framer-motion';



const Hero = () => {
        const style ={
            transform:`translateY("100%")`
        }
         const drag = [
               {
                              url :"https://images.unsplash.com/photo-1610725079793-6c7dfd7f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"do some good deeds"
               },
               {
                              url :"https://images.unsplash.com/photo-1523293915678-d126868e96f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"clean the enviroment"
               },
               {
                              url :"https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"help save this planet"
               },
               {
                              url :"https://media.istockphoto.com/id/1483004221/photo/close-up-image-of-three-plastic-water-bottles-in-a-pile-washed-up-on-sandy-beach-at-low-tide.webp?b=1&s=170667a&w=0&k=20&c=KhcvTJI69PRzRX_RrxkePNLzMU6K90w0HlNXPxEEen0=",
                              text:"say no to plastic"
               },
               {
                              url :"https://images.unsplash.com/photo-1610725079793-6c7dfd7f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"do some good deeds"
               },
               {
                              url :"https://images.unsplash.com/photo-1523293915678-d126868e96f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"clean the enviroment"
               },
               {
                              url :"https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"help save this planet"
               },
               {
                              url :"https://media.istockphoto.com/id/1483004221/photo/close-up-image-of-three-plastic-water-bottles-in-a-pile-washed-up-on-sandy-beach-at-low-tide.webp?b=1&s=170667a&w=0&k=20&c=KhcvTJI69PRzRX_RrxkePNLzMU6K90w0HlNXPxEEen0=",
                              text:"say no to plastic"
               },
               {
                              url :"https://images.unsplash.com/photo-1523293915678-d126868e96f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"clean the enviroment"
               },
               {
                              url :"https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhc3RlJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D",
                              text:"help save this planet"
               },
              
         ]
               
               const ref = useRef(null)
               const ani = [useAnimation(),useAnimation()];



  return (
               

               <>
               <div className='bgimage w-full h-screen flex relative items-center justify-center'>
                              <Navbar />
                              <div><h1 className='text-[100px] font1 leading-none z-10 relative opacity-95'>Nature.</h1></div>

                              <div className='absolute bottom-0 font1 left-0 flex w-full items-center justify-between px-10 z-10 '>
                                  <span className='text-3xl after '>04</span>           
                                  <h1 className='opacity-80 flex items-center gap-1'>Discover your world with us! <span><FaArrowTurnDown className='mt-2' /></span></h1>
                              </div>
                              
                              <div className='gradient w-full h-full absolute top-0 left-0'/>
               </div>
               
               <div className='w-full gap-5 h-[110vh] pt-14 relative'>
               
               <div className='w-72 h-[60%] bg-zinc-500 rounded-lg absolute top-[25%] left-[6%] showbg overflow-hidden'>
                              <img className='absolute w-full h-full z-0 object-cover ' src={img1} alt="" />
                              <div className='w-full h-full bg-black/30 relative z-10 flex items-center justify-center hiddenbg '>
                              <h1 className='z-10 text-white drop-shadow-xl font1 tracking-tight text-3xl rounded-full'>Adventure</h1>
                              </div>
               </div>
               <div className='w-72 h-[60%] bg-zinc-500 rounded-lg absolute top-[40%] left-[28.5%] showbg overflow-hidden'>
                              <img className='absolute w-full h-full z-0 object-cover  ' src={img2} alt="" />
                              <div className='w-full h-full bg-black/30 relative z-10 flex items-center justify-center hiddenbg  '>
                              <h1 className='z-10 text-white drop-shadow-xl font1 tracking-tight text-3xl rounded-full'>Swiming</h1>
                              </div>
               </div>
               <div className='w-72 h-[60%] bg-zinc-500 rounded-lg absolute top-[20%] left-[51%] showbg overflow-hidden'>
                              <img className='absolute w-full h-full z-0 object-cover ' src={img3} alt="" />
                              <div className='w-full h-full bg-black/30 relative z-10 flex items-center justify-center hiddenbg  '>
                              <h1 className='z-10 text-white drop-shadow-xl font1 tracking-tight text-3xl rounded-full'>Mountains</h1>
                              </div>
               </div>
               <div className='w-72 h-[60%] bg-zinc-500 rounded-lg absolute top-[42%] left-[73%] showbg overflow-hidden'>
                              <img className='absolute w-full h-full z-0 object-cover ' src={img4} alt="" />
                              <div className='w-full h-full bg-black/30 relative z-10 flex items-center justify-center hiddenbg  '>
                              <h1 className='z-10 text-white drop-shadow-xl font1 tracking-tight text-3xl rounded-full'>Desert</h1>
                              </div>
               </div>


               </div>

               <div className='w-full h-[150vh] font1 relative overflow-hidden '>
                              <div className='absolute top-[16%] left-[3%] mt-4'>
                                             <h1 className='text-4xl leading-none'>help us</h1>
                                             <h1 className='text-4xl leading-none'>clean enviroment ...</h1>
                                             <p className='text-xs opacity-55 capitalize mt-2'>drag and clean the waste</p>
                              </div>

                              <div className='w-[95%] h-[70%] absolute bottom-2 flex gap-10 flex-wrap justify-center left-[50%] -translate-x-[50%] border border-white/20 rounded-md mx-auto p-3'>
                              
                                         {drag.map((e,i)=>( <Drag ref={ref} data={e} key={i}/>))}               
                                         <div className='w-full h-full flex items-center justify-center mt-[100px] absolute top-0 left-0 flex-col z-0 '>
                                             <h1 className='text-7xl opacity-30 pointer'>Good Job!!</h1>
                                             <h1 className='text-3xl opacity-35 pointer'>All Cleaned.</h1>
                                         </div>
                              </div>

               </div>


               <div className='w-full h-[125vh] pt-40'>
                              <div className='w-full h-[10%] px-14 border-b border-white/30'>
                                             <h1 className='text-5xl font1'>Showcase.</h1>
                              </div>
                              <div className='w-full h-[90%] flex justify-center gap-10 items-center '>
                                             <motion.div className='w-[45%] h-[80%] relative imageHover '>
                                                            <div className='absolute top-[50%]  -translate-y-[50%] z-10 text-5xl font1 text-[#CDEA68] left-full -translate-x-[30%] tracking-tight'>
                                                               
                                                                           <h1 className=' z-10 text-5xl flex font1 overflow-hidden text-[#CDEA68] translate-y-full tracking-tight'>
                                                                            {"health".split("").map((e,i)=><span className='inline-block translate-y-full' key={i}>{e}</span>)}
                                                                            </h1>
                                                              
                                                            </div>

                                                            <div className='w-full h-full  bg-white/30 rounded-2xl overflow-hidden imageHovered '>
                                                                           <img  className='w-full object-cover h-full' src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="not showing" />

                                                            </div>
                                             </motion.div>



                                             <motion.div className='w-[45%] h-[80%] relative imageHover'>

                                                            <div className='absolute top-[50%] z-30 -translate-y-[50%] text-5xl font1  right-full text-[#CDEA68] translate-x-[40%] tracking-tight'>
                                                                           <h1 className=' flex overflow-hidden'>{"enviro".split("").map((e,i)=><span className='inline-block translate-y-full'>{e}</span>)}</h1>
                                                            </div>
                                                            <div className='w-full h-full bg-white/30 rounded-2xl overflow-hidden imageHovered'>
                                                                           <img  className='w-full object-cover h-full' src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not showing" />

                                                            </div>
                                             </motion.div>


                              </div>

               </div>
               </>
    
  )
}

export default Hero
// relia ility of the data can be maintained in the rate the multiple disk keep  redundant data where redundtant data means by using some extra space a duplicate copy of data is preserve which will help in the back up and recovery process during system failure very simple to implement it uses the available storage in best possible way , a single disk loss may leaad to failure of the system , it cannot be used for critical system keeps 