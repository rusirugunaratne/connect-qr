import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetStarted from "./components/login/GetStarted"
import HomePage from "./components/home/Home"
import LoginPage from "./components/login/LoginPage"
import SignUpPage from "./components/login/SignUpPage"
import { ThemeProvider } from "@emotion/react"
import { ThemePalette } from "./theme/Theme"
import CssBaseline from "@mui/material/CssBaseline"
import AppRouter from "./Router/Router"
import TopBar from "./components/topBar/TopBar"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={ThemePalette}>
        <CssBaseline />
        <ToastContainer />
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App
