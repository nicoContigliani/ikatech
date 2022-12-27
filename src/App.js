import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Products from './pages/Products';
import Home from './pages/Home'
import Layouts from './pages/Layouts/Index'

function App() {
  return (
    <div className="App">
      <>
        si
        <BrowserRouter>
          <Layouts />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
