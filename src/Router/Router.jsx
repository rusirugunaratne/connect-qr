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

function AppRouter() {
  const pathsToHideTopBar = ["/", "/login", "/signUp"]

  return (
    <>
      <BrowserRouter>
        <Routes>
          {pathsToHideTopBar.map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <TopBar hideTopBar={pathsToHideTopBar} currentPath={path} />
              }
            />
          ))}
          <Route path='/' element={<GetStarted />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signUp' element={<SignUpPage />} />

          <Route path='/home' element={<HomePage />} />
          <Route
            path='/feed'
            element={<FeedPage hideTopBar={pathsToHideTopBar} />}
          />
          <Route path='/friends' element={<Friends />} />
          <Route path='/add-friend' element={<AddFriendPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
