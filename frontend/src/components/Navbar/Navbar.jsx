import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>

      <div className="container">
        <div className="cont1">
        <div className="logo">
          <h2>InterviewLens</h2>
        </div>
        </div>
        
        <div className="cont2"> 
        <div className="navigation">
          <div className="items">
            <a href="/home">Home</a>
          </div>
          <div className="items">
            <a href="/contact">Contact</a>
          </div>
          <div className="items">
            <a href="/about">About</a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
