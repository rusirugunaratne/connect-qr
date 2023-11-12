// AddFriendPage.js
import React, { useState } from "react"
import { Container, Typography, TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import TopBar from "../topBar/TopBar"
import { QrReader } from "react-qr-reader"
import { QrScanner } from "@yudiel/react-qr-scanner"

const AddFriendPage = () => {
  const [userId, setUserId] = useState("")
  const navigate = useNavigate()

  const handleAddFriend = () => {
    // Implement friend adding logic here
    console.log("Adding friend with ID:", userId)
    // Redirect to the "Friends" page after adding the friend
    navigate("/friends")
  }

  const handleScan = (data) => {
    if (data) {
      setUserId(data)
      console.log(data, "qr data")
    }
  }

  const handleError = (err) => {
    console.error("QR Code Scanner Error:", err)
  }

  return (
    <Container>
      <TopBar />
      <Typography variant='h4' style={{ marginTop: "16px" }}>
        Add Friend
      </Typography>
      <TextField
        label='User ID'
        variant='outlined'
        fullWidth
        style={{ marginBottom: "16px" }}
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={handleAddFriend}
        style={{ marginBottom: "16px" }}
      >
        Add
      </Button>
      <Typography variant='h6' style={{ marginBottom: "8px" }}>
        Scan QR Code
      </Typography>
      <QrScanner
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
      />
    </Container>
  )
}

export default AddFriendPage
