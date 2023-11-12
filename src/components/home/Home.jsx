// HomePage.js
import React from "react"
import TopBar from "../topBar/TopBar"
import FoodItems from "./FoodItems"
import Restaurants from "./Restaurants"
import { Fab } from "@mui/material"
import { Delete } from "@mui/icons-material"
import BottomNav from "../bottomNav/BottomNav"

const HomePage = () => {
  return (
    <>
      <TopBar />
      <FoodItems />
      <Restaurants />
      {/* Your page content goes here */}
    </>
  )
}

export default HomePage
