import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";

const ProfileNavbar = () => {
  let secondUser = JSON.parse(localStorage.getItem("secondUser")) || [];
  let thirdUser = JSON.parse(localStorage.getItem("thirdUser")) || [];
  const [visible,setVisible] = useState(false)
  let value = useContext(UserContext);
  const {setData,data} = value
  console.log(data, "datas");
  
  const handleUser = () => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => {
        setData(response.data.users[3]);
        console.log(response.data.users[3], "3");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mx-10 border">
      <div
        className="border-b w-full py-8 flex justify-between"
      >
        <p>Profile</p>
        <div onClick={()=>setVisible(!visible)} className="flex cursor-pointer">
          <img
            className="w-[30px] h-[30px] rounded-[50%]"
            src={data.profilepicture}
          ></img>
          <p>{data.name}</p>
        </div>
      </div>
      {/* user dropdown */}
      <div className={`w-[20%] ${visible?"block":"hidden"} items-center p-5 rounded-[20px] justify-end fixed right-[40px] bg-[white] shadow-2xl mt-[-20px]`}>
        <img
          className="w-[50%] h-[50%] border rounded-[50%] mx-auto"
          src={data.profilepicture}
        ></img>
        <p className="font-medium text-[18px] text-[#545454] text-center">
          {data.name}
        </p>
        <p className="text-[14px] text-[#545454] text-center">{data.email}</p>
          <div
            onClick={()=>setData(secondUser)}
            className="flex py-3 border-b cursor-pointer"
          >
            <img
              className="w-[30px] h-[30px] rounded-[50%] mr-3"
              src={secondUser.profilepicture}
            ></img>
            <p className="text-[#1c2938] text-[15px] my-auto">{secondUser.name}</p>
          </div>
          <div
          onClick={()=>setData(thirdUser)}
            className="flex py-3 border-b cursor-pointer"
          >
            <img
              className="w-[30px] h-[30px] rounded-[50%] mr-3"
              src={thirdUser.profilepicture}
            ></img>
            <p className="text-[#1c2938] text-[15px] my-auto">{thirdUser.name}</p>
          </div>
          <div className="items-center justify-center flex">
          <button className="border bg-[#d55151] rounded-[20px] text-[white] px-3 py-1 mt-2">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
