import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Inbox from './pages/Inbox'
import OrderChange from './pages/OrderChange'
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import { Layout } from './components/Layout'
import theme from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={ theme }>
    <div className='App'>
      <Layout>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='inbox' element={ <Inbox /> } />
            <Route path='orderchange' element={ <OrderChange /> } />
        </Routes>
      </Layout>
    </div>
    </ThemeProvider>
  );
}

export default App;
