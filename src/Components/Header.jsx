
import React from 'react';
import Navigation from './Navigation';
import './App.css'

const Header = () => {
  return (
    <div>
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          
<div class="buttons-container">
  <button class="signin-button">Sign In</button>
  <button class="register-button"><a href='#'>Register</a></button>
</div>
        </ul>
 



      </nav>
      <Navigation />
    </header>
    </div>
  );
}

export default Header;
