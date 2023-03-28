import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Eingang from './pages/Eingang'
import Umbuchung from './pages/Umbuchung'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
      primary: {
          light: '#489FB5',
          main: '#16697A'
      },
      secondary: {
          light: '#2076A7',
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
      <Layout>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="eingang" element={<Eingang />} />
            <Route path="umbuchung" element={<Umbuchung />} />
        </Routes>
      </Layout>

    </div>
    </ThemeProvider>
  );
}

export default App;
