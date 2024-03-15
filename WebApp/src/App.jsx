import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-fit bg-black text-white'>
    <Hero />
    </div>
    </>
  )
}

export default App
