// BottomNav.js
import React from "react"
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material"
import { Home, RssFeed, People } from "@mui/icons-material"

const BottomNav = () => {
  const theme = useTheme()

  const iconStyle = { color: "white" }

  return (
    <BottomNavigation
      showLabels
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <BottomNavigationAction
        label='Home'
        icon={<Home style={iconStyle} />}
        style={{ color: "white" }}
        onClick={() => console.log("Home clicked")}
      />
      <BottomNavigationAction
        label='Feed'
        icon={<RssFeed style={iconStyle} />}
        style={{ color: "white" }}
        onClick={() => console.log("Feed clicked")}
      />
      <BottomNavigationAction
        label='Friends'
        icon={<People style={iconStyle} />}
        style={{ color: "white" }}
        onClick={() => console.log("Friends clicked")}
      />
    </BottomNavigation>
  )
}

export default BottomNav
