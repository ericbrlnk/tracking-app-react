import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Eingang from './pages/Eingang'
import Umbuchung from './pages/Umbuchung'
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import { Layout } from './components/Layout'
import theme from './components/Layout';

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
