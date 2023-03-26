import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Eingang from './pages/Eingang'
import Umbuchung from './pages/Umbuchung'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element = { <Home /> } />
          <Route path="eingang" element = { <Eingang /> } />
          <Route path="umbuchung" element = { <Umbuchung /> } />
      </Routes>
    </div>
  );
}

export default App;
