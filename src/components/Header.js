import React from "react";

function Header() {
  return (
    <div className="header">
      <div class="topnav">
        <a href="#home">Home</a>
        <a href="#about">Notifications</a>
        <a href="#contact">Messages</a>
        <form className="tweet-form">
          <input type="text" placeholder="Search" className="tweet-input"></input>
          <button className="tweet-button">Tweet</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
