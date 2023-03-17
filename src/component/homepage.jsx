import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        const getData =()=> axios.get("https://panorbit.in/api/users.json").then((response)=>{
            setData(response.data.users)
        }).catch((err)=>{
            console.log(err)
        })
        getData()
    },[])

    const handleClick=(e)=>{
        localStorage.setItem("panorbit user",JSON.stringify(e))
    }

  return (
    <div className='w-screen h-screen bg-[url(https://cdn.wallpapersafari.com/71/41/2lQSnF.jpg)]'>
        <div className='w-[40%] h-[80%] mx-auto left-0 right-0 fixed bottom-0 bg-[white] rounded-t-[15px] shadow-xl'>
            <div className='py-8 bg-[#f6f6f6] rounded-t-[15px] font-medium text-[18px] text-[#5f5f5f]'><p>Select an account</p></div>
            <div className='px-8 overflow-y-scroll h-[370px] scroll-panorbit'>
                {data.map((e)=>{
                    return(
                        <Link to="/profileDetails"><div onClick={()=>handleClick(e)} key={e.id} className='flex py-3 border-b cursor-pointer'>
                            <img className='w-[30px] h-[30px] rounded-[50%] mr-3' src={e.profilepicture}></img>
                            <p className='text-[#1c2938] text-[15px] my-auto'>{e.name}</p>
                        </div></Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Homepage