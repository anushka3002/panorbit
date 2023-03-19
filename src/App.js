import "./App.css";
import Router from "./Routers/router";
import ProfileSidebar from "./component/Profile/profileSidebar";
import { useLocation } from "react-router-dom";
import ProfileNavbar from "./component/Profile/profileNavbar";
import { createContext, useEffect, useState } from "react";
import Chat from "./component/chat";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const UserContext = createContext();

function App() {
  const data = JSON.parse(localStorage.getItem("panorbit user")) || [];
  const [users, setUsers] = useState([]);
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const location = useLocation();
  const [visibleScreen,setVisibleScreen] = useState(location.pathname.substring(1))

  // function to make string to titleCase
  const titleCase=(str)=> {
    if (str) return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
    else return "";
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setVisibleDropdown(false);
    }
  }, [location.pathname]);

  const handleShow = () => {
    visibleDropdown === true && setVisibleDropdown(false);
    showChat && setShowChat(false);
    showList && setShowList(false);
  };

  // passing states as context for other components
  const mainData = {
    data,
    visibleDropdown,
    setVisibleDropdown,
    users,
    setUsers,
    showList,
    setShowList,
    showChat,
    setShowChat,
    visibleScreen,
    setVisibleScreen,
    titleCase
  };

  return (
    <SkeletonTheme baseColor="#cccccc" highlightColor="#a2a2a2" duration={0.7}>
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
    </SkeletonTheme>
  );
}

export default App;
