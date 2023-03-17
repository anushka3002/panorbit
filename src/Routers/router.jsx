import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../component/homepage'
import ProfileDetails from '../component/Profile/profileDetails'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Homepage/>}></Route>
            <Route exact path="/profileDetails" element={<ProfileDetails/>}></Route>\
        </Routes>
    </div>
  )
}

export default Router