import React from "react"
import { Link } from "react-router-dom"
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

const SignUpPage = () => {
  const handleSubmit = (event) => {
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

    // Log the entered data to the console
    console.log("First Name:", firstName)
    console.log("Last Name:", lastName)
    console.log("Username:", username)
    console.log("Password:", password)
    console.log("Email:", email)
    console.log("Date of Birth:", dateOfBirth)
    console.log("Religion:", religion)
    console.log("Celebrated Festival:", celebratedFestival)
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
                  {/* Add more religions as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant='outlined' required fullWidth>
                <InputLabel id='celebratedFestival-label'>
                  Celebrated Festival
                </InputLabel>
                <Select
                  label='Celebrated Festival'
                  id='celebratedFestival'
                  name='celebratedFestival'
                >
                  {/* Add festivals based on selected religion */}
                  <MenuItem value='easter'>Easter</MenuItem>
                  <MenuItem value='ramadan'>Ramadan</MenuItem>
                  <MenuItem value='diwali'>Diwali</MenuItem>
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
