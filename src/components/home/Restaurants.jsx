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
import { ref, set, get, getDatabase } from "firebase/database"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [newRestaurant, setNewRestaurant] = useState("")
  const username = getUsernameFromLocalStorage()
  const db = getDatabase()

  useEffect(() => {
    // Fetch restaurants from Firebase when the component mounts
    const fetchData = async () => {
      try {
        const restaurantsRef = ref(db, `users/${username}/restaurants`)
        const snapshot = await get(restaurantsRef)

        if (snapshot.exists()) {
          setRestaurantList(snapshot.val())
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error.message)
      }
    }

    fetchData()
  }, [username])

  const handleDelete = async (index) => {
    const updatedRestaurants = [...restaurantList]
    updatedRestaurants.splice(index, 1)
    setRestaurantList(updatedRestaurants)

    // Update the restaurants in Firebase
    try {
      const restaurantsRef = ref(db, `users/${username}/restaurants`)
      await set(restaurantsRef, updatedRestaurants)
    } catch (error) {
      console.error("Error updating restaurants:", error.message)
    }
  }

  const handleAddRestaurant = async () => {
    if (newRestaurant.trim() !== "") {
      const updatedRestaurants = [...restaurantList, newRestaurant]
      setRestaurantList(updatedRestaurants)

      // Add the new restaurant to Firebase
      try {
        const restaurantsRef = ref(db, `users/${username}/restaurants`)
        await set(restaurantsRef, updatedRestaurants)
      } catch (error) {
        console.error("Error adding restaurant:", error.message)
      }

      setNewRestaurant("")
    }
  }

  return (
    <Container>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography marginTop={5} variant='h4'>
          Favorite Restaurants
        </Typography>
        <List>
          {restaurantList.map((restaurant, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <FastfoodIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={restaurant} />
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

        <TextField
          label='Add Restaurant'
          variant='outlined'
          margin='normal'
          value={newRestaurant}
          onChange={(e) => setNewRestaurant(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                edge='end'
                aria-label='add'
                onClick={handleAddRestaurant}
              >
                <AddIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Container>
  )
}

export default Restaurants
