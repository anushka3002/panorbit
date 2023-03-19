import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Skeleton from "react-loading-skeleton";

const Homepage = () => {
  const value = useContext(UserContext);
  const { users, setUsers } = value;

  // fetching data from api
  useEffect(() => {
    const getuser = () =>
      axios
        .get("https://panorbit.in/api/users.json")
        .then((response) => {
          setUsers(response.data.users);
          localStorage.setItem(
            "all users",
            JSON.stringify(response.data.users)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    getuser();
  }, []);

  const handleClick = (e) => {
    e.id == users.length
      ? localStorage.setItem("secondUser", JSON.stringify(users[0]))
      : localStorage.setItem("secondUser", JSON.stringify(users[e.id]));
    e.id == users.length - 1
      ? localStorage.setItem("thirdUser", JSON.stringify(users[0]))
      : e.id == users.length
      ? localStorage.setItem("thirdUser", JSON.stringify(users[1]))
      : localStorage.setItem("thirdUser", JSON.stringify(users[e.id + 1]));
    localStorage.setItem("panorbit user", JSON.stringify(e));
  };

  return (
    <div className="w-screen h-screen bg-[url(https://cdn.wallpapersafari.com/71/41/2lQSnF.jpg)]">
      <div className="w-[80%] sm:w-[40%] h-[80%] mx-auto left-0 right-0 fixed bottom-0 bg-[white] rounded-t-[15px] shadow-xl">
        <div className="py-8 bg-[#f6f6f6] rounded-t-[15px] font-medium text-[18px] text-[#5f5f5f] mx-auto">
          <p className="text-center">Select an account</p>
        </div>
        <div className="px-8 overflow-y-scroll h-[370px] scroll-panorbit">
          {/* mapping all users data */}
          {users.map((e) => {
            return (
              <Link to="/profile">
                {users.length > 0 ? (
                  <div
                    onClick={() => handleClick(e)}
                    key={e.id}
                    className="flex py-3 border-b cursor-pointer"
                  >
                    <img
                      className="w-[30px] h-[30px] rounded-[50%] mr-3"
                      src={e.profilepicture}
                    ></img>
                    <p className="text-[#1c2938] text-[15px] my-auto">
                      {e.name}
                    </p>
                  </div>
                ) : (
                  <Skeleton height="46px" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
