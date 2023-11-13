import React from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import Logo from "../../assets/LogoPurple.png" // Update the path to your actual logo
import { db } from "../../firebase"
import { get, getDatabase, ref, set } from "firebase/database"
import { toast } from "react-toastify"

const SignUpPage = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Access form data using event.target
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const username = event.target.username.value
    const password = event.target.password.value
    const email = event.target.email.value
    const dateOfBirth = event.target.dateOfBirth.value
    const religion = event.target.religion.value
    const celebratedFestival = event.target.celebratedFestival.value

    try {
      // Get a reference to the "users" node in the database
      const db = getDatabase()
      const userRef = ref(db, "users/" + username)

      // Check if the username already exists
      const userSnapshot = await get(userRef)

      if (userSnapshot.exists()) {
        toast.error("Username already in use")
      } else {
        // Create a new user object
        const newUser = {
          firstName,
          lastName,
          username,
          password,
          email,
          dateOfBirth,
          religion,
          celebratedFestival,
        }

        // Set the user data at that location
        set(userRef, newUser)

        toast.success("User added successfully")
        // Navigate to the login page
        navigate("/login")
      }
    } catch (error) {
      toast.error("Error adding user: " + error.message)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "64px",
        }}
      >
        <img
          src={Logo}
          alt='React Logo'
          style={{ maxWidth: "100%", width: "auto", height: "auto" }}
        />
        <Typography component='h1' variant='h5' style={{ marginTop: "16px" }}>
          Get Started
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "16px" }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                name='firstName'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                required
                fullWidth
                id='dateOfBirth'
                label='Date of Birth'
                type='date'
                name='dateOfBirth'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant='outlined' required fullWidth>
                <InputLabel id='religion-label'>Religion</InputLabel>
                <Select label='Religion' id='religion' name='religion'>
                  <MenuItem value='christianity'>Christianity</MenuItem>
                  <MenuItem value='islam'>Islam</MenuItem>
                  <MenuItem value='hinduism'>Hinduism</MenuItem>
                  <MenuItem value='hinduism'>Buddhism</MenuItem>
                  {/* Add more religions as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant='outlined' required fullWidth>
                <InputLabel id='celebratedFestival-label'>Ethnicity</InputLabel>
                <Select label='Ethnicity' id='ethnicity' name='ethnicity'>
                  {/* Add festivals based on selected religion */}
                  <MenuItem value='sinhalese'>Sinhalese</MenuItem>
                  <MenuItem value='tamil'>Tamil</MenuItem>
                  <MenuItem value='muslim'>Muslim</MenuItem>
                  <MenuItem value='burgher'>Burgher</MenuItem>
                  {/* Add more festivals as needed */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            style={{ marginTop: "16px" }}
          >
            Sign Up
          </Button>
          <Grid
            container
            justifyContent='flex-end'
            style={{ marginTop: "16px" }}
          >
            <Grid item>
              <Link to='/login' style={{ textDecoration: "none" }}>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignUpPage
