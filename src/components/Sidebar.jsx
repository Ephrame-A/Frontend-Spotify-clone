import React from 'react'
import {assets} from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
            <div className="flex items-center gap-3 pl-8 cursor-pointer" onClick={()=>navigate('/')}>
                <img src={assets.home_icon} alt="" className='font-bold w-6'/>
                <p>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8 cursor-pointer">
                <img src={assets.search_icon} alt="" className='font-bold w-6'/>
                <p>Search</p>
            </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                <img src={assets.stack_icon} className="w-8" alt="" />
                <p className='font-semibold'>Your Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className='w-4' src={assets.arrow_icon} alt="" />
                    <img src={assets.plus_icon} alt="" className="w-4" />
                </div>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start">
                <h1>Create your first playlist</h1>
                <p className="font-light">It's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start mt-4">
                <h1>Let's find some pdcast to follow</h1>
                <p className="font-light">We will keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar