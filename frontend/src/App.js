import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");

  }
  return (
    
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">

        <div className="brand">
          <button onClick={openMenu}> &#9776;</button>
          <a href="index.html">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>

        </div>

      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button onClick={closeMenu} className="sidebar-close-button">X</button>
        <ul>
          <li>
            <a href="index.html">Electronics</a>
          </li>
          <li>
            <a href="index.html">Electricals</a>
          </li>
          <li>
            <a href="index.html">Pantry</a>
          </li>
          <li>
            <a href="index.html">Fashion</a>
          </li>
          <li>
            <a href="index.html">Home and Furniture</a>
          </li>
          <li>
            <a href="index.html">Fitness</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        
        </div>

        
      </main>
      <footer className="footer">All rights reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
