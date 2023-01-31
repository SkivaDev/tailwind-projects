import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className='w-full h-14 bg-red-500'>
      <div className='max-w-full h-14 flex justify-between px-10 items-center'>
        <div className='w-8 h-8'>
          <img className='w-full h-full' src="./assets/react.svg" alt="logo" />
        </div>
        <div className='flex gap-6 items-center'>
          <button className='hover:text-white hover:cursor-pointer text-xl'>
            Home
          </button>
          <button className='hover:text-white hover:cursor-pointer text-xl'>
            Main
          </button>
          <button className='hover:text-white hover:cursor-pointer text-xl'>
            Hello
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
