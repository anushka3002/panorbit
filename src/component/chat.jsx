import React, { useContext, useState } from 'react'
import { UserContext } from '../App';

const Chat = () => {
    const [showList,setShowList] = useState(false)
    let user = JSON.parse(localStorage.getItem("panorbit user")) || []
    let users = JSON.parse(localStorage.getItem("all users")) || []
    console.log(users,"users")

  return (
    <div className='border'>
    <div className='w-full flex justify-end fixed bottom-0'>
    <div className='flex border border-[red]'>
        <div className='bg-[#2c65c8] cursor-pointer flex py-2 w-full flex rounded-t-[12px]'>
            
        </div>
    </div>
    <div className='border mr-12 w-[200px] border-[#2c65c8] rounded-t-[12px]'>
        <div onClick={()=>setShowList(!showList)} className=' bg-[#2c65c8] cursor-pointer flex py-2 w-full flex rounded-t-[12px]'>
        <img className='w-[30px] h-[20px] ml-1' src="/chat.png"></img>
        <p className='text-[white]'>Chats</p>
        <div className='my-auto justify-end'>
        <img className='w-[15px] h-[7px] flex my-auto' src="https://www.seekpng.com/png/full/914-9148298_downarrow-white-down-arrow-icon-white.png"></img>
        </div></div>
        <div className={` ${showList?"visible":"hidden"} px-2 overflow-y-scroll h-[370px] scroll-panorbit`}>
          {users.map((e) => {
            return (
            //   <Link to="/profile">
                <div
                //   onClick={() => handleClick(e)}
                  key={e.id}
                  className="flex py-1 cursor-pointer justify-between"
                >
                    <div className='flex'>
                  <img
                    className="w-[30px] h-[30px] rounded-[50%] mr-3"
                    src={e.profilepicture}
                  ></img>
                  <p className="text-[#1c2938] text-[13px] my-auto">{e.name}</p>
                  </div>
                  <div className={`${(e.id==2 || e.id ==user.id || e.id ==3 || e.id ==7) ? "bg-[#1eaa5c]" : "bg-[#d4d4d4]" } w-[7px] h-[7px] rounded-[50%] my-auto`}></div>
                </div>
            //   </Link>
            );
          })}
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Chat