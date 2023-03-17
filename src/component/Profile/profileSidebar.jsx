import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProfileSidebar = () => {
    const [visible,setVisible] = useState(false)
    return (
        <div className='border w-[18%] ml-10 mt-10 rounded-[20px] h-screen bg-gradient-to-b from-[#3959c8] to-[#5d3bc8] flex flex-col'>
            <div className='text-left pl-10 my-auto'>
            <div className='flex py-2 border-b border-b-[#9e9ee1] justify-between'>
            <Link to="/profile"><p className={`text-[#9e9ee1] ${visible && 'text-[red]'}`}>Profile</p></Link>
            <div className='px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto'>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            <div className='flex py-2 border-b border-b-[#9e9ee1] justify-between'>
            <Link to="/post"><p className='focus:font-medium cursor-pointer text-[#9e9ee1] focus:text-[white]'>Posts</p></Link>
            <div className='px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto'>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            <div className='flex py-2 border-b border-b-[#9e9ee1] justify-between'>
            <Link to="/gallery"><p className='focus:font-medium cursor-pointer text-[#9e9ee1] focus:text-[white]'>Gallery</p></Link>
            <div className='px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto'>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            <div className='flex py-2 border-b border-b-[#9e9ee1] justify-between'>
            <Link to="/todo"><p className='focus:font-medium cursor-pointer text-[#9e9ee1] focus:text-[white]'>ToDo</p></Link>
            <div className='px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto'>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            </div>
        </div>
  )
}

export default ProfileSidebar