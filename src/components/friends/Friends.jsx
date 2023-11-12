// Friends.js
import React, { useState } from "react"
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

const friendsData = [
  {
    id: 1,
    name: "John Doe",
    foodLikes: ["Pizza", "Burgers", "Ice Cream"],
    birthday: "1990-05-15",
    religion: "Christianity",
    festivals: ["Christmas", "Easter"],
  },
  {
    id: 2,
    name: "John Doe",
    foodLikes: ["Pizza", "Burgers", "Ice Cream"],
    birthday: "1990-05-15",
    religion: "Christianity",
    festivals: ["Christmas", "Easter"],
  },
  {
    id: 3,
    name: "John Doe",
    foodLikes: ["Pizza", "Burgers", "Ice Cream"],
    birthday: "1990-05-15",
    religion: "Christianity",
    festivals: ["Christmas", "Easter"],
  },
  {
    id: 4,
    name: "John Doe",
    foodLikes: ["Pizza", "Burgers", "Ice Cream"],
    birthday: "1990-05-15",
    religion: "Christianity",
    festivals: ["Christmas", "Easter"],
  },
  // Add more friends as needed
]

const Friends = () => {
  const [selectedFriend, setSelectedFriend] = useState(null)
  const navigate = useNavigate()

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
        {friendsData.map((friend) => (
          <ListItem
            key={friend.id}
            button
            onClick={() => handleFriendClick(friend)}
          >
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>

      {/* Friend Details Dialog */}
      <Dialog open={!!selectedFriend} onClose={handleCloseDialog}>
        {selectedFriend && (
          <>
            <DialogTitle>{selectedFriend.name}</DialogTitle>
            <DialogContent>
              <Card>
                <CardHeader
                  avatar={<Avatar>{selectedFriend.name.charAt(0)}</Avatar>}
                  title={selectedFriend.name}
                />
                <CardContent>
                  <Typography variant='body1'>
                    <strong>Food Likes:</strong>{" "}
                    {selectedFriend.foodLikes.join(", ")}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Birthday:</strong> {selectedFriend.birthday}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Religion:</strong> {selectedFriend.religion}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Festivals:</strong>{" "}
                    {selectedFriend.festivals.join(", ")}
                  </Typography>
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
