import React from "react"
import { Button, Container, Typography, Grid } from "@mui/material"
import Logo from "../../assets/LogoPurple.png"
import { Link } from "react-router-dom"

function GetStarted() {
  return (
    <Container
      maxWidth='sm'
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Set to 100% of the viewport height
      }}
    >
      <img
        src={Logo}
        alt='React Logo'
        style={{ maxWidth: "100%", width: "auto", height: "auto" }}
      />
      <Typography variant='h4' component='h1' gutterBottom>
        Enhance Social Harmony through Connection
      </Typography>
      <Typography variant='body1' paragraph>
        Connect with friends using uniquely generated QR codes to foster ethnic
        cohesion and social harmony
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Link to='/signUp' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              color='primary'
              fullWidth
              style={{ marginBottom: "16px" }}
            >
              Get Started
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to='/login' style={{ textDecoration: "none" }}>
            <Button variant='outlined' color='primary' fullWidth>
              Login
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GetStarted
