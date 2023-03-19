import React, { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfileNavbar = () => {
  const secondUser = JSON.parse(localStorage.getItem("secondUser")) || [];
  const thirdUser = JSON.parse(localStorage.getItem("thirdUser")) || [];

  const value = useContext(UserContext);
  const {
    data,
    visibleDropdown,
    setVisibleDropdown,
    setVisibleScreen,
    titleCase,
  } = value;

  const location = useLocation();
  const navigate = useNavigate();

  return (
    // header
    <div className="mx-12 border-b">
      <div className="border-b w-full flex py-8 justify-between">
        <div
          className={`font-medium sm:block hidden text-[18px] text-[#545454] text-left`}
        >
          <p>{titleCase(location.pathname.substring(1))}</p>
        </div>
        <div
          onClick={() => setVisibleDropdown(!visibleDropdown)}
          className="flex cursor-pointer my-auto"
        >
          <img
            className="w-[30px] h-[30px] rounded-[50%]"
            src={data.profilepicture}
          ></img>
          <p className="ml-3 text-[#1c2938]">{data.name}</p>
        </div>
      </div>
      {/* user dropdown */}
      <div
        className={`w-[45%] sm:w-[20%] ${
          visibleDropdown ? "block" : "hidden"
        } items-center p-5 rounded-[20px] justify-end fixed right-[40px] bg-[white] shadow-2xl mt-[-20px]`}
      >
        <img
          className="w-[50%] h-[50%] rounded-[50%] mx-auto"
          src={data.profilepicture}
        ></img>
        <p className="font-medium text-[18px] text-[#545454] text-center">
          {data.name}
        </p>
        <p className="text-[14px] text-[#545454] text-center">{data.email}</p>
        <div
          onClick={() => {
            navigate("/profile");
            setVisibleScreen("profile");
            localStorage.setItem("panorbit user", JSON.stringify(secondUser));
            localStorage.setItem("secondUser", JSON.stringify(data));
          }}
          className="flex py-3 border-b cursor-pointer"
        >
          <img
            className="w-[30px] h-[30px] rounded-[50%] mr-3"
            src={secondUser.profilepicture}
          ></img>
          <p className="text-[#1c2938] text-[15px] my-auto">
            {secondUser.name}
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/profile");
            setVisibleScreen("profile");
            localStorage.setItem("panorbit user", JSON.stringify(thirdUser));
            localStorage.setItem("thirdUser", JSON.stringify(data));
          }}
          className="flex py-3 border-b cursor-pointer"
        >
          <img
            className="w-[30px] h-[30px] rounded-[50%] mr-3"
            src={thirdUser.profilepicture}
          ></img>
          <p className="text-[#1c2938] text-[15px] my-auto">{thirdUser.name}</p>
        </div>
        <div className="items-center justify-center flex">
          <button
            onClick={() => {
              navigate("/");
              setVisibleDropdown(false);
            }}
            className="border bg-[#d55151] rounded-[20px] text-[white] px-3 py-1 mt-2"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
