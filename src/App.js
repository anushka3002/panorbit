import logo from "./logo.svg";
import "./App.css";
import Router from "./Routers/router";
import Homepage from "./component/homepage";
import ProfileSidebar from "./component/Profile/profileSidebar";
import { useLocation } from "react-router-dom";
import ProfileNavbar from "./component/Profile/profileNavbar";
import { createContext, useEffect, useState } from "react";
import Chat from "./component/chat";
export let UserContext = createContext();

function App() {
  let user = JSON.parse(localStorage.getItem("panorbit user")) || [];
  let secondUser = JSON.parse(localStorage.getItem("secondUser")) || [];
  let thirdUser = JSON.parse(localStorage.getItem("thirdUser")) || [];
  const [users, setUsers] = useState([]);
  const [secondData, setSecondData] = useState(secondUser);
  const [thirdData, setThirdData] = useState(thirdUser);
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [visibleScreen,setVisibleScreen] = useState("profile")
  const [visible, setVisible] = useState({
    profileV: "visible",
    postV: "hidden",
    galleryV: "hidden",
    todoV: "hidden",
  });
  const [data, setData] = useState(user);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setVisibleDropdown(false);
    }
    
  }, [location.pathname]);

  const handleShow = () => {
    visibleDropdown == true && setVisibleDropdown(false);
    showChat && setShowChat(false);
    showList && setShowList(false);
  };

  const mainData = {
    secondData,
    setSecondData,
    thirdData,
    setThirdData,
    data,
    setData,
    visibleDropdown,
    setVisibleDropdown,
    users,
    setUsers,
    visible,
    setVisible,
    showList,
    setShowList,
    showChat,
    setShowChat,
    visibleScreen,
    setVisibleScreen
  };

  return (
    <UserContext.Provider value={mainData}>
      <div onClick={() => handleShow()} className="flex">
        {location.pathname !== "/" && <ProfileSidebar />}
        <div className="w-[80%]">
          {location.pathname !== "/" && <ProfileNavbar />}
          <Router />
        </div>
      </div>
      {location.pathname !== "/" && <Chat />}
    </UserContext.Provider>
  );
}

export default App;
