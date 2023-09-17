import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './services/Home';
import Carrinho from './services/Carrinho';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <Carrinho /> } />
    </Routes>
  );
}

export default App;
