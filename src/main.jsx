import { React, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
 
const theme = createTheme({
  palette: {
    primary: {
      main: "#013e87",
    },
    secondary: {
      main: "#2e74c9",
    }
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    }
  },
  components: {
    Box: {
      styleOverrides: {
        // your object in the home component goes here
        pt: 4, 
        display: 'flex', 
        flexDirection: { xs: "column", md: "row"},
        flexWrap: {md: "wrap", xs: "nowrap"},
        justifyContent: "space-between", 
        gap: 4
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
