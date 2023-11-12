import { Button, Container, Typography } from "@mui/material"
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
      <img width={500} src={Logo} alt='React Logo' />
      <Typography variant='h4' component='h1' gutterBottom>
        Enhance Social Harmony through Connection
      </Typography>
      <Typography variant='body1' paragraph>
        Connect with friends using uniquely generated QR codes to foster ethnic
        cohesion and social harmony
      </Typography>
      <div style={{ display: "flex", gap: "16px" }}>
        <Link to='/signUp' style={{ textDecoration: "none" }}>
          <Button variant='contained' color='primary'>
            Get Started
          </Button>
        </Link>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <Button variant='outlined' color='primary'>
            Login
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default GetStarted
