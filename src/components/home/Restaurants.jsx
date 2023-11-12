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

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [newRestaurant, setNewRestaurant] = useState("")

  const handleDelete = (index) => {
    const updatedRestaurants = [...restaurantList]
    updatedRestaurants.splice(index, 1)
    setRestaurantList(updatedRestaurants)
  }

  const handleAddRestaurant = () => {
    if (newRestaurant.trim() !== "") {
      setRestaurantList([...restaurantList, newRestaurant])
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
