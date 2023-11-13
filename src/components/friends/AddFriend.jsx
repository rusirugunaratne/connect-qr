import React, { useState, useEffect } from "react"
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import TopBar from "../topBar/TopBar"
import { QrScanner } from "@yudiel/react-qr-scanner"
import { ref, set, get, getDatabase, push } from "firebase/database"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"

const AddFriendPage = () => {
  const [userId, setUserId] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const username = getUsernameFromLocalStorage()
  const db = getDatabase()
  const [isUserAdding, setIsUserAdding] = useState(false)

  // const handleAddFriend = async () => {
  //   try {
  //     // Check if the user with the entered username exists
  //     const userRef = ref(db, `users/${userId}`)
  //     const userSnapshot = await get(userRef)

  //     if (userSnapshot.exists()) {
  //       // Add friend to the user's friends list
  //       const friendsRef = ref(db, `users/${username}/friends`)
  //       const friendsSnapshot = await get(friendsRef)
  //       const currentFriends = friendsSnapshot.exists()
  //         ? friendsSnapshot.val()
  //         : []
  //       const updatedFriends = [...currentFriends, userId]
  //       await set(friendsRef, updatedFriends)

  //       // Redirect to the "Friends" page after adding the friend
  //       setIsUserAdding(false)
  //       navigate("/friends")
  //     } else {
  //       setError("User not found. Please enter a valid username.")
  //     }
  //   } catch (error) {
  //     console.error("Error adding friend:", error.message)
  //     setError("Error adding friend. Please try again.")
  //   }
  // }

  const handleAddFriend = async () => {
    try {
      // Check if the user with the entered username exists
      const userRef = ref(db, `users/${userId}`)
      const userSnapshot = await get(userRef)

      if (userSnapshot.exists()) {
        // Check if the friend is not already in the user's friends list
        const friendsRef = ref(db, `users/${username}/friends`)
        const friendsSnapshot = await get(friendsRef)
        const currentFriends = friendsSnapshot.exists()
          ? friendsSnapshot.val()
          : []

        // Convert currentFriends to an array if it's not
        const currentFriendsArray = Array.isArray(currentFriends)
          ? currentFriends
          : []

        if (!currentFriendsArray.includes(userId)) {
          // Add friend to the user's friends list
          await set(friendsRef, [...currentFriendsArray, userId])

          // Redirect to the "Friends" page after adding the friend
          setIsUserAdding(false)
          navigate("/friends")
        } else {
          setError("This friend is already in your list.")
        }
      } else {
        setError("User not found. Please enter a valid username.")
      }
    } catch (error) {
      console.error("Error adding friend:", error.message)
      setError("Error adding friend. Please try again.")
    }
  }

  const handleScan = (data) => {
    if (data) {
      setUserId(data)
    }
  }

  const handleError = (err) => {
    console.error("QR Code Scanner Error:", err)
    setError("Error scanning QR code. Please try again.")
  }

  const handleCloseError = () => {
    setError(null)
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
        onDecode={(result) => {
          if (result && !isUserAdding) {
            setIsUserAdding(true)
            setUserId(result)
            handleAddFriend()
          }
        }}
        onError={handleError}
      />

      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={handleCloseError}
        message={error}
      />
    </Container>
  )
}

export default AddFriendPage
