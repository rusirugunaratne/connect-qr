import React, { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Link,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Badge,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import QrCodeIcon from "@mui/icons-material/QrCode"
import HomeIcon from "@mui/icons-material/Home"
import RssFeedIcon from "@mui/icons-material/RssFeed"
import Diversity2Icon from "@mui/icons-material/Diversity2"
import Logo from "../../assets/LogoPurple.png"
import { useNavigate } from "react-router-dom"
import QRCode from "react-qr-code"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LightbulbIcon from "@mui/icons-material/Lightbulb"

const TopBar = () => {
  const [greeting, setGreeting] = useState("")
  const [userName, setUserName] = useState(getUsernameFromLocalStorage())
  const [isQrDialogOpen, setQrDialogOpen] = useState(false)
  const navigate = useNavigate()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning")
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon")
    } else {
      setGreeting("Good Evening")
    }
  }, [])

  const currentPath = window.location.pathname

  const handleQrCodeClick = () => {
    setQrDialogOpen(true)
  }

  const handleQrDialogClose = () => {
    setQrDialogOpen(false)
  }

  // Assuming you have a function to get the user ID
  const userId = getUsernameFromLocalStorage()

  return (
    <Container>
      <img
        src={Logo}
        alt='Logo'
        style={{ marginTop: "16px", height: "48px" }}
      />
      <AppBar position='static'>
        <Toolbar>
          <Link href='/home' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <HomeIcon />
            </IconButton>
          </Link>
          <Link href='/notifications' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <NotificationsIcon />
            </IconButton>
          </Link>
          <Link href='/feed' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <RssFeedIcon />
            </IconButton>
          </Link>
          <Link href='/friends' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <Diversity2Icon />
            </IconButton>
          </Link>
          <Link href='/learn' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <LightbulbIcon />
            </IconButton>
          </Link>
          <Link href='/profile' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <AccountCircleIcon />
            </IconButton>
          </Link>
          {!isSmallScreen && (
            <Typography variant='h6' style={{ flexGrow: 1 }}>
              {greeting}, {userName}!
            </Typography>
          )}
          <IconButton color='inherit' onClick={handleQrCodeClick}>
            <QrCodeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* QR Code Dialog */}
      <Dialog open={isQrDialogOpen} onClose={handleQrDialogClose}>
        <DialogTitle>Scan or Type to Add</DialogTitle>
        <DialogContent>
          <QRCode value={userId} />
          <Typography variant='body1' style={{ marginTop: "16px" }}>
            My Unique Code: {userId}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleQrDialogClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default TopBar
