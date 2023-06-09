import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const Chat = () => {
  const user = JSON.parse(localStorage.getItem("panorbit user")) || [];
  const users = JSON.parse(localStorage.getItem("all users")) || [];
  const [chatUser, setChatUser] = useState(user);
  const [text, setText] = useState("");
  const [chatData, setChatData] = useState([]);
  const value = useContext(UserContext);
  const { data, showList, setShowList, showChat, setShowChat } = value;

  const handleChat = () => {
    setChatData([...chatData, text]);
    setText("");
    localStorage.setItem("user chat", JSON.stringify(chatData));
  };

  return (
    <div>
      <div className="right-0 flex justify-end fixed bottom-0 mr-12">
        {/*chat box  */}
        <div
          className={`${
            showChat ? "visible" : "hidden"
          } border border-[#2c65c8] bg-[white] rounded-t-[12px] fixed bottom-0 mr-[230px]`}
        >
          <div
            onClick={() => setShowChat(!showChat)}
            className="bg-[#2c65c8] cursor-pointer py-2 rounded-t-[12px]"
          >
            <div className="flex px-2 justify-between">
              <div className="flex">
                <img
                  className="w-[27px] rounded-[50%] mr-3"
                  src={chatUser.profilepicture}
                  alt="profile"
                ></img>
                <p className="text-[white] text-[12px] my-auto">
                  {chatUser.name}
                </p>
              </div>
              <div className="flex">
                <img
                  className="w-[12px] h-[7px] flex my-auto"
                  src="https://www.seekpng.com/png/full/914-9148298_downarrow-white-down-arrow-icon-white.png"
                  alt="arrow"
                ></img>
                <img
                  className="w-[14px] h-[10px] flex my-auto ml-2"
                  src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/letter-x-icon-18-256.png"
                  alt="cross"
                ></img>
              </div>
            </div>
          </div>
          <div className="border-b text-[#444444] h-[280px] overflow-y-scroll scroll-panorbit">
            <p className="text-[12px] p-3 bg-[#f1f1f1] w-[70%] ml-3 mt-3 mb-1">
              Lorem ipsum dolor
            </p>
            <p className="text-[12px] p-3 bg-[#f1f1f1] w-[70%] ml-3 mt-3 mb-1">
              Lorem ipsum dolor sit
            </p>
            <p className="text-[12px] py-1 text-center text-[#a2a2a2]">
              9:16 pm
            </p>
            <p className="text-[12px] p-3 bg-[#f1f1f1] w-[70%] ml-10 mt-3 mb-1">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[12px] p-3 bg-[#f1f1f1] w-[70%] ml-10 mt-3 mb-1">
              Lorem ipsum dolor sit
            </p>
            <div>
              {chatData.map((e) => {
                return (
                  <>
                    <p className="text-[12px] p-3 bg-[#f1f1f1] w-[70%] ml-10 mt-3 mb-1">
                      {e}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <input
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleChat();
                }
              }}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-[90%] text-[12px] p-2 focus:outline-none"
            ></input>
            <img
              onClick={handleChat}
              className="w-[14px] h-[14px] w-[10%] my-auto cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/3682/3682321.png"
              alt="send"
            ></img>
          </div>
        </div>
        {/* users list */}
        <div className="border w-[200px] border-[#2c65c8] rounded-t-[12px]">
          <div
            onClick={() => {
              setShowList(!showList);
              setShowChat(false);
            }}
            className=" bg-[#2c65c8] cursor-pointer justify-between px-3 flex py-2 w-full flex rounded-t-[12px]"
          >
            <div className="flex">
              <img className="w-[30px] h-[20px] my-auto" src="/chat.png" alt="chat"></img>
              <p className="text-[white]">Chats</p>
            </div>
            <div className="my-auto">
              <img
                className="w-[15px] h-[7px] flex my-auto"
                src="https://www.seekpng.com/png/full/914-9148298_downarrow-white-down-arrow-icon-white.png"
                alt="arrow"
              ></img>
            </div>
          </div>
          <div
            className={` ${
              showList ? "visible" : "hidden"
            } px-2 overflow-y-scroll h-[370px] scroll-panorbit bg-[white]`}
          >
            {users.map((e) => {
              return (
                <div
                  onClick={() => {
                    setChatUser(e);
                    setShowChat(true);
                  }}
                  key={e.id}
                  className="flex py-1 cursor-pointer justify-between"
                >
                  <div className="flex">
                    <img
                      className="w-[30px] h-[30px] rounded-[50%] mr-3"
                      src={e.profilepicture}
                      alt="profile"
                    ></img>
                    <p className="text-[#1c2938] text-[13px] my-auto">
                      {e.name}
                    </p>
                  </div>
                  <div
                    className={`${
                      e.id === 2 || e.id === data.id || e.id === 3 || e.id === 7
                        ? "bg-[#1eaa5c]"
                        : "bg-[#d4d4d4]"
                    } w-[7px] h-[7px] rounded-[50%] my-auto`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
