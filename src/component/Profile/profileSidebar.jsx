import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';

const ProfileSidebar = () => {
    let value = useContext(UserContext);
    const {
      visibleScreen,
      setVisibleScreen
    } = value;

    function titleCase(str) {
      if (str) return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
      else return "";
    }
    const screens = ["profile","posts","todo","gallery"]

    return (
        <div className='w-[180px] sm:h-[650px] h-[800px] lg:w-[230px] ml-30 mt-10 rounded-[20px] lg:ml-10 bg-gradient-to-b from-[#3959c8] to-[#5d3bc8] flex flex-col'>
            <div className='text-left lg:pl-10 pl-3 my-auto'>
            {screens.map((e)=>{
              return(
                <div>
                <div className='flex py-3 justify-between'>
                <Link to={`/${e}`}><p onClick={()=>setVisibleScreen(e)} className={`${visibleScreen==e && "font-medium text-[white]"} text-[#9e9ee1]`}>{titleCase(e)}</p></Link>
                <div className={` ${visibleScreen==e ? "block" : "hidden"} px-2 py-1 bg-[white] rounded-[40%] mr-[-10px] my-auto`}>
                <img className={` w-[15px] h-[15px] my-auto items-center`} src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"></img>
                </div></div>
                <hr className='mr-8'></hr>
                </div>
              )
            })}
            </div>
        </div>
  )
}

export default ProfileSidebar