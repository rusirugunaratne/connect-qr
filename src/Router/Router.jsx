// AppRouter.js
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetStarted from "../components/login/GetStarted"
import LoginPage from "../components/login/LoginPage"
import SignUpPage from "../components/login/SignUpPage"
import HomePage from "../components/home/Home"
import TopBar from "../components/topBar/TopBar"
import FeedPage from "../components/feed/FeedPage"
import Friends from "../components/friends/Friends"
import AddFriendPage from "../components/friends/AddFriend"
import ProfilePage from "../components/profile/Profile"
import NotificationPage from "../components/notification/NotificationPage"
import LearnPage from "../components/learn/LearnPage"

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signUp' element={<SignUpPage />} />

          <Route path='/home' element={<HomePage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/notifications' element={<NotificationPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/learn' element={<LearnPage />} />
          <Route path='/add-friend' element={<AddFriendPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
