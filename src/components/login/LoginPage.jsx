import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Typography, TextField, Grid } from "@mui/material"
import Logo from "../../assets/LogoPurple.png" // Update the path to your actual logo
import { toast } from "react-toastify"
import { get, getDatabase, ref } from "firebase/database"
import { saveUsernameToLocalStorage } from "../../localStorage/LocalStorage"

const LoginPage = () => {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Access form data using event.target
    const username = event.target.username.value
    const password = event.target.password.value

    // Log the entered data to the console
    console.log("Username:", username)
    console.log("Password:", password)

    try {
      // Retrieve user from Firebase Realtime Database
      const db = getDatabase()
      const userRef = ref(db, `users/${username}`)
      const snapshot = await get(userRef)

      if (snapshot.exists()) {
        const userData = snapshot.val()
        // Check if the password matches
        if (userData.password === password) {
          saveUsernameToLocalStorage(username)
          // Password is correct, navigate to the homepage
          navigate("/home")
        } else {
          toast.error("Invalid Password")
        }
      } else {
        toast.error("User not found")
      }
    } catch (error) {
      toast.error("Error authenticating user:", error.message)
      console.error("Error authenticating user:", error)
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
        <img src={Logo} alt='React Logo' width={400} />
        <Typography component='h1' variant='h5' style={{ marginTop: "16px" }}>
          Login
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "16px" }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                autoComplete='username'
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
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            style={{ marginTop: "16px" }}
          >
            Login
          </Button>
          <Grid
            container
            justifyContent='flex-end'
            style={{ marginTop: "16px" }}
          >
            <Grid item>
              <Link to='/signup' style={{ textDecoration: "none" }}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginPage
