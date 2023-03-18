import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';

const ProfileSidebar = () => {
    let value = useContext(UserContext);
    const {
      visible,
      setVisible
    } = value;
    return (
        <div className='w-[180px] sm:h-[650px] h-[800px] lg:w-[230px] ml-30 mt-10 rounded-[20px] lg:ml-10 bg-gradient-to-b from-[#3959c8] to-[#5d3bc8] flex flex-col'>
            <div className='text-left lg:pl-10 pl-3 my-auto'>
            <div className='flex py-3 justify-between'>
            <Link to="/profile"><p onClick={()=>setVisible({...visible,profileV:"visible",postV:"hidden",galleryV:"hidden",todoV:"hidden"})} className={`${visible.profileV=="visible" && "font-medium text-[white]"} text-[#9e9ee1]`}>Profile</p></Link>
            <div className={`${visible.profileV} px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto`}>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            <hr className='bg-[#9e9ee1] w-[80%]'></hr>
            <div className='flex py-3 justify-between'>
            <Link to="/post"><p onClick={()=>setVisible({...visible,profileV:"hidden",postV:"visible",galleryV:"hidden",todoV:"hidden"})} className={`${visible.postV=="visible" && "font-medium text-[white]"} cursor-pointer text-[#9e9ee1]`}>Posts</p></Link>
            <div className={`${visible.postV} px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto`}>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            <hr className='bg-[#9e9ee1] w-[80%]'></hr>
            <div className='flex py-3 justify-between'>
            <Link to="/gallery"><p onClick={()=>setVisible({...visible,profileV:"hidden",postV:"hidden",galleryV:"visible",todoV:"hidden"})} className={`${visible.galleryV=="visible" && "font-medium text-[white]"} cursor-pointer text-[#9e9ee1]`}>Gallery</p></Link>
            <div className={`${visible.galleryV} px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto`}>
            <img className='w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            <hr className='bg-[#9e9ee1] w-[80%]'></hr>
            <div className='flex py-3 justify-between'>
            <Link to="/todo"><p onClick={()=>setVisible({...visible,profileV:"hidden",postV:"hidden",galleryV:"hidden",todoV:"visible"})} className={`${visible.todoV=="visible" && "font-medium text-[white]"} cursor-pointer text-[#9e9ee1]`}>ToDo</p></Link>
            <div className={`${visible.todoV} px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto`}>
            <img className= 'w-[15px] h-[15px] my-auto items-center' src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
            </div></div>
            </div>
        </div>
  )
}

export default ProfileSidebar