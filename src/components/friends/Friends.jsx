// Friends.js
import React, { useState, useEffect } from "react"
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Fab,
} from "@mui/material"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import TopBar from "../topBar/TopBar"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useNavigate } from "react-router-dom"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { ref, get, getDatabase } from "firebase/database"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"

const Friends = () => {
  const [friends, setFriends] = useState([])
  const [selectedFriend, setSelectedFriend] = useState(null)
  const navigate = useNavigate()
  const username = getUsernameFromLocalStorage()
  const db = getDatabase()

  const fetchFriendsDetails = async (friendUsernames) => {
    const friendsDetails = []

    for (const friendUsername of friendUsernames) {
      try {
        const friendDetailsRef = ref(db, `users/${friendUsername}`)
        const friendDetailsSnapshot = await get(friendDetailsRef)

        if (friendDetailsSnapshot.exists()) {
          friendsDetails.push(friendDetailsSnapshot.val())
        }
      } catch (error) {
        console.error("Error fetching friend details:", error.message)
      }
    }

    return friendsDetails
  }

  console.log("friends", selectedFriend)

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsRef = ref(db, `users/${username}/friends`)
        const friendsSnapshot = await get(friendsRef)

        if (friendsSnapshot.exists()) {
          const friendUsernames = Object.values(friendsSnapshot.val())
          const friendsDetails = await fetchFriendsDetails(friendUsernames)
          setFriends(friendsDetails)
        }
      } catch (error) {
        console.error("Error fetching friends:", error.message)
      }
    }

    if (username) {
      fetchFriends()
    }
  }, [username])

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend)
  }

  const handleCloseDialog = () => {
    setSelectedFriend(null)
  }

  const handleAddFriend = () => {
    // Navigate to the "Add Friend" page
    navigate("/add-friend")
  }

  return (
    <Container>
      <TopBar />
      <Typography variant='h4' style={{ marginTop: "16px" }}>
        Friends
      </Typography>
      <List>
        {friends.map((friend) => (
          <ListItem
            key={friend.id}
            button
            onClick={() => handleFriendClick(friend)}
          >
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
            <ListItemText primary={friend.firstName} />
          </ListItem>
        ))}
      </List>

      {/* Friend Details Dialog */}
      <Dialog open={!!selectedFriend} onClose={handleCloseDialog}>
        {selectedFriend && (
          <>
            <DialogTitle>{selectedFriend.firstName}</DialogTitle>
            <DialogContent>
              <Card>
                <CardHeader
                  avatar={<Avatar>{selectedFriend.firstName.charAt(0)}</Avatar>}
                  title={selectedFriend.firstName}
                />
                <CardContent>
                  <Typography variant='body1'>
                    <strong>Food Likes:</strong>{" "}
                    {selectedFriend.foodItems
                      ? selectedFriend.foodItems.join(", ")
                      : ""}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Birthday:</strong> {selectedFriend.dateOfBirth}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Religion:</strong> {selectedFriend.religion}
                  </Typography>
                  {/* <Typography variant='body1'>
                    <strong>Festivals:</strong>{" "}
                    {selectedFriend.celebratedFestival.join(", ")}
                  </Typography> */}
                </CardContent>
              </Card>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color='primary'>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Floating Action Button for Add Friend */}
      <Fab
        color='primary'
        style={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={handleAddFriend}
      >
        <PersonAddIcon />
      </Fab>
    </Container>
  )
}

export default Friends
