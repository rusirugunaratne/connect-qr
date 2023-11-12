import React, { useState, useEffect } from "react"
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
import { ref, set, get, push, getDatabase } from "firebase/database"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([])
  const [newItem, setNewItem] = useState("")
  const username = getUsernameFromLocalStorage()
  const db = getDatabase()

  useEffect(() => {
    // Fetch food items from Firebase when the component mounts
    const fetchData = async () => {
      try {
        const foodItemsRef = ref(db, `users/${username}/foodItems`)
        const snapshot = await get(foodItemsRef)

        if (snapshot.exists()) {
          setFoodItems(snapshot.val())
        }
      } catch (error) {
        console.error("Error fetching food items:", error.message)
      }
    }

    fetchData()
  }, [username])

  const handleDelete = async (index) => {
    const updatedItems = [...foodItems]
    updatedItems.splice(index, 1)
    setFoodItems(updatedItems)

    // Update the food items in Firebase
    try {
      const foodItemsRef = ref(db, `users/${username}/foodItems`)
      await set(foodItemsRef, updatedItems)
    } catch (error) {
      console.error("Error updating food items:", error.message)
    }
  }

  const handleAddItem = async () => {
    if (newItem.trim() !== "") {
      const updatedItems = [...foodItems, newItem]
      setFoodItems(updatedItems)

      // Add the new item to Firebase
      try {
        const foodItemsRef = ref(db, `users/${username}/foodItems`)
        await set(foodItemsRef, updatedItems)
      } catch (error) {
        console.error("Error adding food item:", error.message)
      }

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
