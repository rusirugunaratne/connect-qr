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
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import QrCodeIcon from "@mui/icons-material/QrCode"
import HomeIcon from "@mui/icons-material/Home"
import RssFeedIcon from "@mui/icons-material/RssFeed"
import Diversity2Icon from "@mui/icons-material/Diversity2"
import Logo from "../../assets/LogoPurple.png"
import { useNavigate } from "react-router-dom"
import QRCode from "react-qr-code"

const TopBar = ({ hideTopBar }) => {
  const [greeting, setGreeting] = useState("")
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

  if (hideTopBar && hideTopBar.includes(currentPath)) {
    return null
  }

  const handleQrCodeClick = () => {
    setQrDialogOpen(true)
  }

  const handleQrDialogClose = () => {
    setQrDialogOpen(false)
  }

  // Assuming you have a function to get the user ID
  const userId = "12345"

  return (
    <Container>
      <img
        src={Logo}
        alt='Logo'
        style={{ marginTop: "16px", height: "48px" }}
      />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            onClick={() => console.log("Go to notifications page")}
          >
            <NotificationsIcon />
          </IconButton>
          <Link href='/home' color='inherit' underline='none'>
            <IconButton color='inherit'>
              <HomeIcon />
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
          {!isSmallScreen && (
            <Typography variant='h6' style={{ flexGrow: 1 }}>
              {greeting}, User's Name!
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
