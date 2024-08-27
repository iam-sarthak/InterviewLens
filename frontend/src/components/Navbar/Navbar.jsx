import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
       
        <div className="logo">
          <h2>InterviewLens</h2>
        </div>
        <div className="navigation">
          <div className="items"> <a href="/home">Home</a></div>
          <div className="items"> <a href="/contact">Contact</a></div>
          <div className="items"> <a href="/About">About</a></div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." /></div>
     </div>
      
    </header>
  );
}

export default Navbar;
