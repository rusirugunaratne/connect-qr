import React, { useState } from "react"
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import AddIcon from "@mui/icons-material/Add"

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([])
  const [newItem, setNewItem] = useState("")

  const handleDelete = (index) => {
    const updatedItems = [...foodItems]
    updatedItems.splice(index, 1)
    setFoodItems(updatedItems)
  }

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setFoodItems([...foodItems, newItem])
      setNewItem("")
    }
  }

  return (
    <Container>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography marginTop={5} variant='h4'>
          Favorite Foods
        </Typography>
        <List>
          {foodItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FastfoodIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item} />
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          <TextField
            label='Add Food Item'
            variant='outlined'
            margin='normal'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={handleAddItem}
                >
                  <AddIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default FoodItems
