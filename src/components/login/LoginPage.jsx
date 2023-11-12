import React from "react"
import { Link } from "react-router-dom"
import { Button, Container, Typography, TextField, Grid } from "@mui/material"
import Logo from "../../assets/LogoPurple.png" // Update the path to your actual logo

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault()

    // Access form data using event.target
    const username = event.target.username.value
    const password = event.target.password.value

    // Log the entered data to the console
    console.log("Username:", username)
    console.log("Password:", password)
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
