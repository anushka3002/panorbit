import logo from './logo.svg';
import './App.css';
import Router from './Routers/router';
import Homepage from './component/homepage';
import ProfileSidebar from './component/Profile/profileSidebar';
import { useLocation } from 'react-router-dom';
import ProfileNavbar from './component/Profile/profileNavbar';
import { createContext, useState } from 'react';
export let UserContext = createContext();

function App() {
  let user = JSON.parse(localStorage.getItem("panorbit user")) || [];
  let secondUser = JSON.parse(localStorage.getItem("secondUser")) || [];
  let thirdUser = JSON.parse(localStorage.getItem("thirdUser")) || [];
  const [data, setData] = useState(user);
  const mainData={
    secondUser,
    thirdUser,
    data,
    setData
  }
  const location = useLocation();  
  console.log(location.pathname,"location")

  // https://panorbit.in/api/users.json
  return (
    <UserContext.Provider value={mainData}>
    <div className=" flex">
      {location.pathname!=="/" && <ProfileSidebar/>}
      <div className='w-[80%]'>
      {location.pathname!=="/" && <ProfileNavbar/>}
      <Router/>
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
