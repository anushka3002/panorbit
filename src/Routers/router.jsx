import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../component/homepage'
import Gallery from '../component/Profile/gallery'
import Post from '../component/Profile/post'
import Profile from '../component/Profile/profile'
// import ProfileDetails from '../component/Profile/profileSidebar'
import Todo from '../component/Profile/todo'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Homepage/>}></Route>
            <Route exact path="/profile" element={<Profile/>}></Route>
            <Route exact path="/posts" element={<Post/>}></Route>
            <Route exact path="/gallery" element={<Gallery/>}></Route>
            <Route exact path="/todo" element={<Todo/>}></Route>
        </Routes>
    </div>
  )
}

export default Router