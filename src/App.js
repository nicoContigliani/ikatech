import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { Counter } from './features/counter/Counter';
import './App.css';
import Products from './pages/Products';
import Home from './pages/Home'
import Layouts from './pages/Layouts/Index'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}



      <>
        si
        <BrowserRouter>
          <Layouts />
          <Routes>
            {/* <Route path="/" element={<Layouts />}></Route> */}
            <Route path="/home" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>


      </>





    </div>
  );
}

export default App;
