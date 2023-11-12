// FeedPage.js
import React, { useState } from "react"
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  useTheme,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import TopBar from "../topBar/TopBar"

const FeedPage = () => {
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [userName, setUserName] = useState("Rusiru Gunaratene") // Set an initial value

  const handleAddThought = () => {
    if (newThought.trim() !== "") {
      const timestamp = new Date().toISOString()
      setThoughts([
        ...thoughts,
        { sender: userName, content: newThought, timestamp },
      ])
      setNewThought("")
    }
  }

  // Sort thoughts by timestamp in descending order (newest first)
  const sortedThoughts = thoughts
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  return (
    <Container>
      <TopBar />
      <Typography
        variant='h4'
        style={{ marginTop: "16px", marginBottom: "16px" }}
      >
        Share your thoughts
      </Typography>
      <TextField
        label="What's on your mind?"
        variant='outlined'
        fullWidth
        multiline
        rows={4}
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        style={{ marginBottom: "16px" }}
      />
      <Button
        variant='contained'
        color='primary'
        endIcon={<SendIcon />}
        onClick={handleAddThought}
        style={{ marginBottom: "16px" }}
      >
        Post
      </Button>
      {sortedThoughts.map((thought, index) => (
        <Card
          key={index}
          style={{ marginBottom: "16px", border: `2px solid ${primaryColor}` }}
        >
          <CardHeader
            avatar={
              <Avatar>{thought.sender.trim().charAt(0).toUpperCase()}</Avatar>
            }
            title={thought.sender}
          />
          <CardContent>
            <Typography variant='body1'>{thought.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default FeedPage
