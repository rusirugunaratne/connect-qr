// HomePage.js
import React from "react"
import TopBar from "../topBar/TopBar"
import FoodItems from "./FoodItems"
import Restaurants from "./Restaurants"
import { Fab, Grid, Stack } from "@mui/material"
import { Delete } from "@mui/icons-material"
import BottomNav from "../bottomNav/BottomNav"
import homeHeader from "../../assets/homeHeader.jpg"
import friends from "../../assets/friends.jpg"
import learn from "../../assets/learn.jpg"
import notifications from "../../assets/notifications.jpg"
import thoughts from "../../assets/thoughts.jpg"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = (route) => {
    navigate(route)
  }

  return (
    <>
      <TopBar />
      <img src={homeHeader} alt='' style={{ maxWidth: "100%" }} />
      <Grid container spacing={2}>
        <Grid
          item
          md={3}
          xs={6}
          onClick={() => handleClick("/friends")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={friends}
            alt=''
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          md={3}
          xs={6}
          onClick={() => handleClick("/learn")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={learn}
            alt=''
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>

        <Grid
          item
          md={3}
          xs={6}
          onClick={() => handleClick("/notifications")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={notifications}
            alt=''
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          md={3}
          xs={6}
          onClick={() => handleClick("/feed")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={thoughts}
            alt=''
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      <FoodItems />
      <Restaurants />
      {/* Your page content goes here */}
    </>
  )
}

export default HomePage
