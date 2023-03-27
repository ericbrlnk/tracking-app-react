import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Eingang from './pages/Eingang'
import Umbuchung from './pages/Umbuchung'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
      primary: {
          main: "#2C586F"
      },
      secondary: {
          main: "#1C3F53"
      }
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700 
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="eingang" element={<Eingang />} />
          <Route path="umbuchung" element={<Umbuchung />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
