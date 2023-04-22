import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Inbox from './pages/Inbox'
import OrderChange from './pages/OrderChange'
import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import { Layout } from './components/Layout'
import theme from './components/Layout';
import Delivery from './pages/Delivery';
import Pickup from './pages/Pickup';
import Tracking from './pages/Tracking';
import Administration from './pages/Administration';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ThemeProvider theme={ theme }>
    <div className='App'>
      <Layout>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='inbox' element={ <Inbox /> } />
            <Route path='orderchange' element={ <OrderChange /> } />
            <Route path='delivery' element={ <Delivery /> } />
            <Route path='pickup' element={ <Pickup /> } />
            <Route path='tracking' element={ <Tracking /> } />
            <Route path='administration' element={ <Administration /> } />
            <Route path='login' element={ <LoginPage /> } />

        </Routes>
      </Layout>
    </div>
    </ThemeProvider>
  );
}

export default App;
